import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FloatingMenu from '@/components/FloatingMenu';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import { Button } from '@/components/ui/button';

const SERVICES = [
  { category: 'First Appointment', name: 'Checkup/Diagnosis', description: 'A comprehensive dental checkup and diagnosis to assess your oral health.' },
  { category: 'First Appointment', name: 'Checkup and 1 Immediate Treatment', description: 'Checkup plus one immediate dental treatment as needed.' },
  { category: 'First Appointment', name: 'Checkup and Multiple Treatments', description: 'Checkup and multiple dental treatments in a single visit.' },
  { category: 'Restoration', name: 'Front teeth (Harap na ngipin) Resto', description: 'Restoration of front teeth for improved function and aesthetics.' },
  { category: 'Restoration', name: 'Back tooth Resto', description: 'Restoration of a single back tooth.' },
  { category: 'Restoration', name: 'Back teeth (2-3 teeth) Resto', description: 'Restoration of 2-3 back teeth in one session.' },
  { category: 'Restoration', name: '4-6 teeth Resto', description: 'Restoration of 4-6 teeth for comprehensive care.' },
  { category: 'Restoration', name: '7-9 teeth Resto', description: 'Restoration of 7-9 teeth for extensive dental needs.' },
  { category: 'Cosmetic', name: 'Gum Contouring/Gingivectomy', description: 'Reshaping or removing gum tissue for a more attractive smile.' },
  { category: 'Cosmetic', name: 'Diastema/Gap Closure', description: 'Closing gaps between teeth for a more uniform appearance.' },
  { category: 'Cosmetic', name: 'Whitening/Bleaching (1 cycle)', description: 'Professional teeth whitening in a single cycle.' },
  { category: 'Cosmetic', name: 'Whitening/Bleaching (2 cycles)', description: 'Enhanced teeth whitening with two cycles.' },
  { category: 'Cosmetic', name: 'Whitening/Bleaching (3 cycles)', description: 'Maximum teeth whitening with three cycles.' },
  { category: 'Cosmetic', name: '1-2 Teeth Same-Day Veneers', description: 'Immediate veneers for 1-2 teeth to improve your smile.' },
  { category: 'Cosmetic', name: '3-4 Teeth Same-Day Veneers', description: 'Immediate veneers for 3-4 teeth for a quick smile makeover.' },
  { category: 'Cosmetic', name: 'Full Smile Same-Day Veneer', description: 'Transform your entire smile with same-day veneers.' },
  { category: 'Cosmetic', name: '1-2 Teeth Lab Fabricated Veneers', description: 'Custom lab-made veneers for 1-2 teeth.' },
  { category: 'Cosmetic', name: 'Full Smile Lab Fabricated Veneers', description: 'Custom lab-made veneers for a full smile transformation.' },
  { category: 'Cosmetic', name: 'Follow-up Lab Fabricated Veneers', description: 'Follow-up care for lab-fabricated veneers.' },
  { category: 'Root Canal Treatment', name: '1st Session RCT', description: 'First session of root canal treatment to relieve pain and infection.' },
  { category: 'Root Canal Treatment', name: 'Succeeding Session RCT', description: 'Follow-up sessions for ongoing root canal treatment.' },
  { category: 'Crowns and Bridges', name: 'Impression (Sukat) Crown/Bridge', description: 'Taking impressions for crowns or bridges.' },
  { category: 'Crowns and Bridges', name: 'Tooth Preparation (1-2 teeth) Crown/Bridge', description: 'Preparing 1-2 teeth for crowns or bridges.' },
  { category: 'Crowns and Bridges', name: 'Tooth Preparation (3-5 teeth) Crown/Bridge', description: 'Preparing 3-5 teeth for crowns or bridges.' },
  { category: 'Crowns and Bridges', name: 'Trial Crown/Bridge', description: 'Trial fitting of crowns or bridges.' },
  { category: 'Crowns and Bridges', name: 'Final Delivery Crown/Bridge', description: 'Final placement of crowns or bridges.' },
  { category: 'Oral Surgery or Extractions', name: 'Soft Tissue Removal', description: 'Removal of soft tissue for oral health or prosthetics.' },
  { category: 'Oral Surgery or Extractions', name: 'Front tooth (Harap na ngipin) Exo', description: 'Extraction of a front tooth.' },
  { category: 'Oral Surgery or Extractions', name: 'Moving tooth (Gumagalaw) Exo', description: 'Extraction of a loose or moving tooth.' },
  { category: 'Oral Surgery or Extractions', name: 'Back tooth (Likod na ngipin) Exo', description: 'Extraction of a back tooth.' },
  { category: 'Oral Surgery or Extractions', name: '2-3 teeth (Front) Exo', description: 'Extraction of 2-3 front teeth.' },
  { category: 'Oral Surgery or Extractions', name: '2-3 teeth (Back) Exo', description: 'Extraction of 2-3 back teeth.' },
  { category: 'Oral Surgery or Extractions', name: 'Wisdom tooth removal (Erupted/Nakalabas)', description: 'Removal of an erupted wisdom tooth.' },
  { category: 'Oral Surgery or Extractions', name: 'Wisdom tooth removal (Surgery/Complicated)', description: 'Surgical removal of a complicated wisdom tooth.' },
  { category: 'Dentures', name: 'Impression (Sukat) Denture', description: 'Taking impressions for dentures.' },
  { category: 'Dentures', name: 'Trial Denture', description: 'Trial fitting of dentures.' },
  { category: 'Dentures', name: 'Final Delivery Denture', description: 'Final delivery and fitting of dentures.' },
  { category: 'Orthodontics (Braces)', name: '1st Appointment (Impression & Oral Pictures) Ortho', description: 'Initial orthodontic appointment for impressions and photos.' },
  { category: 'Orthodontics (Braces)', name: '2nd Appointment (Bracket Installation)', description: 'Installation of orthodontic brackets.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (w/o bracket)', description: 'Routine braces adjustment without bracket work.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (1hr appointment as requested by the dentist)', description: 'Extended braces adjustment as requested by your dentist.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (w/1-2 bracket recement)', description: 'Adjustment and recementing of 1-2 brackets.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (w/3-5 bracket recement)', description: 'Adjustment and recementing of 3-5 brackets.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (1-2 brackets)', description: 'Adjustment of 1-2 brackets.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Adjustment (3-5 brackets)', description: 'Adjustment of 3-5 brackets.' },
  { category: 'Orthodontics (Braces)', name: 'Braces Removal', description: 'Removal of braces after treatment completion.' },
  { category: 'Orthodontics (Braces)', name: 'Retainers (Impression/Delivery)', description: 'Impressions and delivery of retainers.' },
  { category: 'Orthodontics (Braces)', name: 'Same Day Diagnosis and Bracket Installation', description: 'Diagnosis and bracket installation in a single visit.' },
];

const ServicesTable: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleAdd = (service: string) => {
    if (!selected.includes(service)) {
      setSelected(prev => {
        setTimeout(() => {
          const el = document.getElementById('selected-services');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        return [...prev, service];
      });
    }
  };
  const handleRemove = (service: string) => {
    setSelected(selected.filter(s => s !== service));
  };
  // Dummy scroll handlers for FloatingMenu
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-padding mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Dental Services</h1>
      <div className="mb-8">
        {/* Table for desktop, cards for mobile */}
        <div className="hidden sm:block">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Category</th>
                <th className="px-4 py-2 border-b">Service</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((svc, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{svc.category}</td>
                  <td className="px-4 py-2 border-b">{svc.name}</td>
                  <td className="px-4 py-2 border-b">{svc.description}</td>
                  <td className="px-4 py-2 border-b">
                    {selected.includes(svc.name) ? (
                      <Button variant="destructive" size="sm" onClick={() => handleRemove(svc.name)}>
                        Remove
                      </Button>
                    ) : (
                      <Button variant="secondary" size="sm" onClick={() => handleAdd(svc.name)}>
                        Add Service
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden flex flex-col gap-4">
          {SERVICES.map((svc, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 border">
              <div className="text-xs text-gray-500 mb-1 font-semibold">{svc.category}</div>
              <div className="font-bold text-base mb-1">{svc.name}</div>
              <div className="text-gray-700 mb-2 text-sm">{svc.description}</div>
              <div>
                {selected.includes(svc.name) ? (
                  <Button variant="destructive" size="sm" onClick={() => handleRemove(svc.name)}>
                    Remove
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" onClick={() => handleAdd(svc.name)}>
                    Add Service
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8" id="selected-services">
        <h2 className="text-xl font-semibold mb-2">Selected Services</h2>
        {selected.length === 0 ? (
          <p className="text-gray-500">No services selected yet.</p>
        ) : (
          <ul className="list-disc ml-6">
            {selected.map((svc, idx) => (
              <li key={idx}>{svc}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-12">
        <BookAppointmentForm doctorId={0} doctorName="" selectedServices={selected} />
      </div>
      </div>
      <FloatingMenu
        onAppointmentClick={() => window.location.assign('/services')}
        onServicesClick={() => scrollToSection('selected-services')}
        onPromoClick={() => scrollToSection('promo')}
      />
    </div>
  );
};

export default ServicesTable;
