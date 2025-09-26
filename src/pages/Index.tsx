
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import BookAppointmentCard from '@/components/BookAppointmentCard';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import FloatingMenu from '@/components/FloatingMenu';

const Index = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="bg-white py-20">
        <div className="container-padding mx-auto">
          <BookAppointmentCard />
        </div>
      </div>
      <DoctorsSection />
      <TestimonialsSection />
      <Footer />
      <FloatingMenu
        onAppointmentClick={() => setShowAppointmentModal(true)}
        onServicesClick={() => window.location.assign('/services')}
        onPromoClick={() => scrollToSection('promo')}
      />
      <Dialog open={showAppointmentModal} onOpenChange={setShowAppointmentModal}>
        <DialogContent>
          <BookAppointmentForm doctorId={0} doctorName="" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
