

const formSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
	phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
	dateOfBirth: z.date({ required_error: 'Please enter your date of birth' }),
	date: z.date({ required_error: 'Please select a date' }),
	time: z.string().min(1, { message: 'Please select a time' }),
	reason: z.string().min(10, { message: 'Please provide a reason for your visit' }),
	hearAbout: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookAppointmentForm: React.FC = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '',
			dateOfBirth: undefined,
			date: undefined,
			time: '',
			reason: '',
			hearAbout: '',
		}
	});

	const sendToWhatsApp = (data: FormValues) => {
		const timeZone = 'Asia/Jakarta';
		const zonedDate = toZonedTime(data.date, timeZone);
		const formattedDate = tzFormat(zonedDate, 'PPP', { timeZone });
		let dobString = '';
		if (data.dateOfBirth) {
			dobString = tzFormat(toZonedTime(data.dateOfBirth, timeZone), 'dd/MM/yyyy', { timeZone });
		}
		let message = `*New Appointment Request*\n\n` +
			`*Name:* ${data.name}\n` +
			`*Phone Number:* ${data.phone}\n` +
			`*Date of Birth:* ${dobString}\n` +
			`*Date:* ${formattedDate} (Asia/Jakarta)\n` +
			`*Time:* ${data.time}\n` +
			`*Reason:* ${data.reason}`;
		if (data.hearAbout) {
			message += `\n*How did you hear about us?:* ${data.hearAbout}`;
		}
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/6285210121788?text=${encodedMessage}`;
		window.open(whatsappUrl, '_blank');
	};

	const onSubmit = async (data: FormValues) => {
		setIsSubmitting(true);
		try {
			sendToWhatsApp(data);
			form.reset();
		} finally {
			setIsSubmitting(false);
		}
	};

	// Helper for 30-min interval times
	const times: string[] = [];
	for (let h = 0; h < 24; h++) {
		for (let m = 0; m < 60; m += 30) {
			const hour12 = h % 12 === 0 ? 12 : h % 12;
			const ampm = h < 12 ? 'AM' : 'PM';
			times.push(`${hour12}:${m.toString().padStart(2, '0')} ${ampm}`);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
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
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="(123) 456-7890" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dateOfBirth"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date of Birth</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<div className="relative w-full">
											<input
												type="text"
												readOnly
												value={field.value ? format(field.value, "dd/MM/yyyy") : ''}
												placeholder="DD/MM/YYYY"
												className="w-full h-12 px-3 pr-10 border rounded-md bg-white text-base font-normal text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer transition-none hover:bg-white hover:border-sky-400"
												style={{ cursor: 'pointer', transition: 'none' }}
												tabIndex={0}
												aria-label="Date of Birth"
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
											return date >= today;
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
							name="date"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Appointment Date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<div className="relative w-full">
											<input
												type="text"
												readOnly
												value={field.value ? format(field.value, "PPP") : ''}
												placeholder="Pick a date"
												className="w-full h-12 px-3 pr-10 border rounded-md bg-white text-base font-normal text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer transition-none hover:bg-white hover:border-sky-400"
												style={{ cursor: 'pointer', transition: 'none' }}
												tabIndex={0}
												aria-label="Pick a date"
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
											return date < today;
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
									className="w-full h-12 px-3 border rounded-md bg-white text-base text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
									value={field.value}
									onChange={e => field.onChange(e.target.value)}
								>
									<option value="">Select a time</option>
									{times.map(time => (
										<option key={time} value={time}>{time}</option>
									))}
								</select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="hearAbout"
					render={({ field }) => {
						const options = [
							{ value: '', label: '--' },
							{ value: 'website', label: 'Website' },
							{ value: 'social', label: 'Social Media' },
							{ value: 'word', label: 'Word of Mouth' },
							{ value: 'visit', label: 'Previous Visit' },
							{ value: 'other', label: 'Other' },
						];
						return (
							<FormItem>
								<FormLabel>How did you hear about us?</FormLabel>
								<FormControl>
									<select
										className="w-full h-12 px-3 border rounded-md bg-white text-base text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
										value={field.value}
										onChange={e => field.onChange(e.target.value)}
									>
										{options.map(opt => (
											<option key={opt.value} value={opt.value}>{opt.label}</option>
										))}
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="reason"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Reason for Visit</FormLabel>
							<FormControl>
								<Input placeholder="Describe your reason for visiting" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full bg-dental-blue text-black hover:bg-dental-blue-dark" disabled={isSubmitting}>
					{isSubmitting ? 'Booking...' : 'Book Appointment'}
				</Button>
			</form>
		</Form>
	);
};

export default BookAppointmentForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { toZonedTime, format as tzFormat } from 'date-fns-tz';




