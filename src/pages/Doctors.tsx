import React from 'react';
import DoctorsSection from '../components/DoctorsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Doctors: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <DoctorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
