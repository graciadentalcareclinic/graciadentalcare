

import React, { useState } from 'react';
import ValidationModal from './ValidationModal';
import { useTranslation } from '@/lib/TranslationProvider';
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
  hearAbout: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;
// Helper to generate time slots between two times
function generateTimeSlots(start: string, end: string) {
  const slots = [];
  let [h, m] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  while (h < eh || (h === eh && m <= em)) {
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    slots.push(`${hour12}:${m.toString().padStart(2, "0")} ${ampm}`);
    m += 30;
    if (m >= 60) { h++; m = 0; }
  }
  return slots;
}

// Clinic hours: Mon, Tue, Thu: 10:00-21:00; Wed, Fri: 10:00-17:00
const clinicHours = {
  1: { start: "10:00", end: "21:00" }, // Monday
  2: { start: "10:00", end: "21:00" }, // Tuesday
  3: { start: "10:00", end: "17:00" }, // Wednesday
  4: { start: "10:00", end: "21:00" }, // Thursday
  5: { start: "10:00", end: "17:00" }, // Friday
};

function getAvailableTimesForDate(date: Date | undefined) {
  if (!date) return [];
  const day = date.getDay();
  // JS: 0=Sunday, 1=Monday, ...
  const hours = clinicHours[day];
  if (!hours) return [];
  return generateTimeSlots(hours.start, hours.end);
}
const doctors = [
  { id: 1, name: "Charly Esmond Siagian", availableDays: [1, 3, 5] },
  { id: 2, name: "Desyanne Winardi", availableDays: [1, 2, 3, 4, 5] },
  { id: 3, name: "Bradley Melthon Siagian", availableDays: [1, 2, 3, 4, 5] },
  { id: 4, name: "Erwina Siagian", availableDays: [1, 2, 3, 4, 5] },
];
const BookAppointmentForm: React.FC<BookAppointmentFormProps> = ({ doctorId, doctorName, selectedServices = [] }) => {

  // Deduplicate selectedServices for all uses in this component
  const uniqueSelectedServices = Array.from(new Set(selectedServices));

  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      time: '',
      reason: '',
      hearAbout: '',
    }
  });

  const sendToWhatsApp = (data: FormValues) => {
  const timeZone = 'Asia/Jakarta';
  const zonedDate = toZonedTime(data.date, timeZone);
  const formattedDate = tzFormat(zonedDate, 'PPP', { timeZone });
    let message = `*New Appointment Request*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone Number:* ${data.phone}\n` +
      `*Date:* ${formattedDate} (Asia/Jakarta)\n` +
      `*Time:* ${data.time}\n` +
      `*Reason:* ${data.reason}`;
    if (data.hearAbout) {
      message += `\n*How did you hear about us?:* ${data.hearAbout}`;
    }
    if (Array.isArray(uniqueSelectedServices) && uniqueSelectedServices.length > 0) {
      const PROMOS = [
        'Promo Kids First Dental Visit',
        'Joyful Smile Scaling Treatment',
        'Hollywood Smile Make Over',
        'Best Choice Dental Implant',
        'Kids First Dental Visit',
        'Instant Teeth Whitening',
        'Promo Pasang Behel',
      ];
      const promos = uniqueSelectedServices.filter(item => PROMOS.includes(item));
      const services = uniqueSelectedServices.filter(item => !PROMOS.includes(item));
      if (services.length > 0) {
        message += `%0ASelected Services:%0A- ${services.join('%0A- ')}`;
      }
      if (promos.length > 0) {
        message += `%0ASelected Promos:%0A- ${promos.join('%0A- ')}`;
      }
    }
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6285210121788?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
  };

  const onSubmit = async (data: FormValues) => {
    // Force send to WhatsApp regardless of validation
    sendToWhatsApp(data);
    form.reset();
  };
  const handleContinue = () => {
    if (modalData) {
      setIsSubmitting(true);
      try {
        sendToWhatsApp(modalData);
        form.reset();
        setShowModal(false);
        setModalData(null);
      } catch (error) {
        toast({
          title: "Error",
          description: t('validationModal.error') || "There was an error booking your appointment. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleGoBack = () => {
    setShowModal(false);
  };

  const getDoctorAvailability = () => {
  if (doctorId === 0) return [0,1,2,3,4,5,6];
  const doctor = doctors.find(doc => doc.id === doctorId);
  return doctor?.availableDays || [];
  };

  return (
    <div className="mt-6">
      {/* Only the highlighted selected services list remains below the service selection */}
      {uniqueSelectedServices.length > 0 && !showModal && (
        <div className="mb-6">
          <h4 className="text-base font-semibold mb-2">{t('appointment.selectedServices') || 'Selected Services'}</h4>
          <ol className="list-decimal ml-6">
            {uniqueSelectedServices.map((service, idx) => (
              <li
                key={idx}
                className="bg-sky-100 text-sky-800 font-semibold rounded px-2 py-1 my-1 transition-colors duration-200 border-2 border-sky-300 shadow"
                style={{ boxShadow: '0 0 0 2px #38bdf8' }}
              >
                {service}
              </li>
            ))}
          </ol>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={e => { e.preventDefault(); onSubmit(form.getValues()); }} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('appointment.name')}</FormLabel>
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
                <FormLabel>{t('appointment.phone')}</FormLabel>
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
                <FormLabel>{t('appointment.date')}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <div className="relative w-full">
                        <input
                          type="text"
                          readOnly
                          value={field.value ? format(field.value, "PPP") : ''}
                          placeholder={t('appointment.pickDate') || 'Pick a date'}
                          className="w-full h-12 px-3 pr-10 border rounded-md bg-white text-base font-normal text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer transition-none hover:bg-white hover:border-sky-400"
                          style={{ cursor: 'pointer', transition: 'none' }}
                          tabIndex={0}
                          aria-label={t('appointment.pickDate') || 'Pick a date'}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Calendar className="h-5 w-5 opacity-50" />
                        </span>
                      </div>
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
          {/* Promo Inquiry: How did you hear about us */}
          <FormField
            control={form.control}
            name="hearAbout"
            render={({ field }) => {
              const options = [
                { value: '', label: '--' },
                { value: 'website', label: t('promo.hearAbout.website') },
                { value: 'social', label: t('promo.hearAbout.social') },
                { value: 'word', label: t('promo.hearAbout.word') },
                { value: 'visit', label: t('promo.hearAbout.visit') },
                { value: 'other', label: t('promo.hearAbout.other') },
              ];
              const selectedIdx = options.findIndex(opt => opt.value === field.value);
              const prevIdx = selectedIdx > 0 ? selectedIdx - 1 : options.length - 1;
              const nextIdx = selectedIdx < options.length - 1 ? selectedIdx + 1 : 0;

              const [open, setOpen] = React.useState(false);
              const containerRef = React.useRef<HTMLDivElement>(null);

              React.useEffect(() => {
                if (!open) return;
                const handleClick = (e: MouseEvent) => {
                  if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                    setOpen(false);
                  }
                };
                document.addEventListener('mousedown', handleClick);
                return () => document.removeEventListener('mousedown', handleClick);
              }, [open]);

              const handleUp = () => field.onChange(options[prevIdx].value);
              const handleDown = () => field.onChange(options[nextIdx].value);
              const handleKeyDown = (e: React.KeyboardEvent) => {
                if (open) {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    handleDown();
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    handleUp();
                  } else if (e.key === 'Escape' || e.key === 'Tab') {
                    setOpen(false);
                  } else if (e.key === 'Enter') {
                    setOpen(false);
                  }
                } else {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
                    setOpen(true);
                  }
                }
              };

              return (
                <FormItem>
                  <FormLabel>{t('promo.hearAbout')}</FormLabel>
                  <FormControl>
                    <div ref={containerRef} className="relative w-full select-none" tabIndex={0} onKeyDown={handleKeyDown}>
                      <div
                        className="w-full h-12 flex items-center justify-center border rounded-md bg-white text-base font-semibold text-sky-800 shadow-inner ring-2 ring-sky-400 cursor-pointer"
                        onClick={() => setOpen(o => !o)}
                        aria-haspopup="listbox"
                        aria-expanded={open}
                        role="button"
                      >
                        {options[selectedIdx]?.label || options[0].label}
                      </div>
                      {open && (
                        <div className="absolute z-10 left-0 right-0 mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto" role="listbox">
                          {options.map((opt, idx) => (
                            <div
                              key={opt.value}
                              className={`px-4 py-2 cursor-pointer text-center ${field.value === opt.value ? 'bg-sky-600 text-white font-semibold' : 'hover:bg-sky-100 text-sky-800'}`}
                              onClick={() => { field.onChange(opt.value); setOpen(false); }}
                              role="option"
                              aria-selected={field.value === opt.value}
                            >
                              {opt.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* Modern horizontally scrollable time selector */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => {
              const availableTimes = getAvailableTimesForDate(form.watch('date'));
              let selectedIdx = availableTimes.findIndex(t => t === field.value);
              if (selectedIdx === -1 && availableTimes.length > 0) selectedIdx = 0;
              const prevIdx = selectedIdx > 0 ? selectedIdx - 1 : availableTimes.length - 1;
              const nextIdx = selectedIdx < availableTimes.length - 1 ? selectedIdx + 1 : 0;

              const [open, setOpen] = React.useState(false);
              const containerRef = React.useRef<HTMLDivElement>(null);

              React.useEffect(() => {
                if (!open) return;
                const handleClick = (e: MouseEvent) => {
                  if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                    setOpen(false);
                  }
                };
                document.addEventListener('mousedown', handleClick);
                return () => document.removeEventListener('mousedown', handleClick);
              }, [open]);

              const handleUp = () => {
                if (availableTimes.length === 0) return;
                field.onChange(availableTimes[prevIdx]);
              };
              const handleDown = () => {
                if (availableTimes.length === 0) return;
                field.onChange(availableTimes[nextIdx]);
              };
              const handleKeyDown = (e: React.KeyboardEvent) => {
                if (open) {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    handleDown();
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    handleUp();
                  } else if (e.key === 'Escape' || e.key === 'Tab') {
                    setOpen(false);
                  } else if (e.key === 'Enter') {
                    setOpen(false);
                  }
                } else {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
                    setOpen(true);
                  }
                }
              };

              // For dropdown, show 2 above, selected, 2 below (total 5)
              let dropdownTimes = [];
              if (open && availableTimes.length > 0) {
                for (let i = -2; i <= 2; i++) {
                  let idx = (selectedIdx + i + availableTimes.length) % availableTimes.length;
                  dropdownTimes.push({
                    value: availableTimes[idx],
                    isSelected: idx === selectedIdx
                  });
                }
              }

              // Mouse wheel scroll handler for dropdown
              const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
                if (!open) return;
                e.preventDefault();
                if (e.deltaY > 0) {
                  handleDown();
                } else if (e.deltaY < 0) {
                  handleUp();
                }
              };

              return (
                <FormItem>
                  <FormLabel>{t('appointment.time')}</FormLabel>
                  <FormControl>
                    <div ref={containerRef} className="relative w-full flex flex-col items-center gap-2 select-none" tabIndex={0} onKeyDown={handleKeyDown}>
                      {!open && (
                        <>
                          <button type="button" aria-label="Previous time" onClick={handleUp} className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 text-sky-700 mb-1 focus:outline-none">
                            ▲
                          </button>
                          <div
                            className="w-full h-12 flex items-center justify-center border rounded-lg bg-white text-lg font-semibold text-sky-800 shadow-inner ring-2 ring-sky-400 cursor-pointer"
                            onClick={() => setOpen(true)}
                            aria-haspopup="listbox"
                            aria-expanded={open}
                            role="button"
                          >
                            {availableTimes[selectedIdx] || availableTimes[0]}
                          </div>
                          <button type="button" aria-label="Next time" onClick={handleDown} className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 text-sky-700 mt-1 focus:outline-none">
                            ▼
                          </button>
                        </>
                      )}
                      {open && (
                        <div className="absolute z-10 left-1/2 -translate-x-1/2 mt-1 bg-white border rounded-md shadow-lg w-full max-w-full flex flex-col items-center py-2" style={{top: '100%'}} role="listbox" onWheel={handleWheel}>
                          {/* Up arrow indicator */}
                          <div className="w-full flex justify-center mb-1 select-none pointer-events-none" aria-hidden="true">
                            <span className="text-sky-400 text-lg">▲</span>
                          </div>
                          {dropdownTimes.map((t, idx) => (
                            <div
                              key={t.value}
                              className={`px-4 py-2 cursor-pointer text-center w-full ${t.isSelected ? 'bg-sky-600 text-white font-semibold ring-2 ring-sky-400' : 'hover:bg-sky-100 text-sky-800'}`}
                              style={{
                                margin: idx === 2 ? '2px 0' : undefined,
                                borderRadius: idx === 2 ? '8px' : undefined,
                                fontSize: idx === 2 ? '1.15rem' : undefined,
                                fontWeight: idx === 2 ? 600 : undefined,
                                boxShadow: idx === 2 ? '0 0 0 2px #38bdf8' : undefined,
                              }}
                              onClick={() => { field.onChange(t.value); setOpen(false); }}
                              role="option"
                              aria-selected={t.isSelected}
                            >
                              {t.value}
                            </div>
                          ))}
                          {/* Down arrow indicator */}
                          <div className="w-full flex justify-center mt-1 select-none pointer-events-none" aria-hidden="true">
                            <span className="text-sky-400 text-lg">▼</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button 
            type="submit" 
            className="w-full bg-dental-blue text-black hover:bg-dental-blue-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('appointment.booking') || "Booking..." : t('appointment.book') || "Book Appointment"}
          </Button>
        </form>
      </Form>
    </div>
  );
  };
  export default BookAppointmentForm;


