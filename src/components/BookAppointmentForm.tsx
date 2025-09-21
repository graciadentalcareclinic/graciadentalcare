import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { format } from 'date-fns';
import { toZonedTime, format as tzFormat } from 'date-fns-tz';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface BookAppointmentFormProps {
  doctorId: number;
  doctorName: string;
  selectedServices?: string[];
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string().min(1, { message: 'Please select a time' }),
  reason: z.string().min(10, { message: 'Please provide a reason for your visit' }),
});

type FormValues = z.infer<typeof formSchema>;

const availableTimes = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
];

// Import doctors data to get availability
const doctors = [
  {
    id: 1,
    name: "Charly Esmond Siagian",
    availableDays: [1, 3, 5] // Monday, Wednesday, Friday
  },
  {
    id: 2,
    name: "Desyanne Winardi",
    availableDays: [1, 2, 3, 4, 5] // Monday to Friday
  },
  {
    id: 3,
    name: "Bradley Melthon Siagian",
    availableDays: [1, 2, 3, 4, 5] // Monday to Friday
  },
  {
    id: 4,
    name: "Erwina Siagian",
    availableDays: [1, 2, 3, 4, 5] // Monday to Friday
  },
];

const BookAppointmentForm = ({ doctorId, doctorName, selectedServices = [] }: BookAppointmentFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      time: '',
      reason: '',
    }
  });


  const sendToWhatsApp = (data: FormValues) => {
  const timeZone = 'Asia/Jakarta';
  const zonedDate = toZonedTime(data.date, timeZone);
  const formattedDate = tzFormat(zonedDate, 'PPP', { timeZone });
    let message = `New Appointment Request:%0AName: ${data.name}%0APhone: ${data.phone}%0ADate: ${formattedDate} (Asia/Jakarta)%0ATime: ${data.time}%0ADoctor: ${doctorName}%0AReason: ${data.reason}`;
    if (Array.isArray(selectedServices) && selectedServices.length > 0) {
      // List of all promos
      const PROMOS = [
        'Promo Kids First Dental Visit',
        'Joyful Smile Scaling Treatment',
        'Hollywood Smile Make Over',
        'Best Choice Dental Implant',
        'Kids First Dental Visit',
        'Instant Teeth Whitening',
        'Promo Pasang Behel',
      ];
      const promos = selectedServices.filter(item => PROMOS.includes(item));
      const services = selectedServices.filter(item => !PROMOS.includes(item));
      if (services.length > 0) {
        message += `%0ASelected Services:%0A- ${services.join('%0A- ')}`;
      }
      if (promos.length > 0) {
        message += `%0ASelected Promos:%0A- ${promos.join('%0A- ')}`;
      }
    }
    const whatsappUrl = `https://wa.me/6289637507810?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      sendToWhatsApp(data);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDoctorAvailability = () => {
    if (doctorId === 0) return [0,1,2,3,4,5,6]; // Allow all days if no doctor selected
    const doctor = doctors.find(doc => doc.id === doctorId);
    return doctor?.availableDays || [];
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
        
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-full pl-3 text-left font-normal ${!field.value ? "text-muted-foreground" : ""}`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <Calendar className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (date < today) return true;
                        
                        const dayOfWeek = date.getDay();
                        const availableDays = getDoctorAvailability();
                        return !availableDays.includes(dayOfWeek);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <select
                    className="w-full p-2 border rounded-md"
                    {...field}
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Visit</FormLabel>
                <FormControl>
                  <Input placeholder="Please describe your dental concerns..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-dental-blue text-black hover:bg-dental-blue-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookAppointmentForm;
