
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/80 shadow-2xl backdrop-blur-lg py-1 border-b border-gray-200'
        : 'bg-white/40 shadow-lg backdrop-blur-md py-2 border-b border-transparent'
    )}>
      <div className="container-padding mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group" tabIndex={0} aria-label="Go to homepage">
          <img
            src="/logo.jpg"
            alt="Gracia Dental Care Logo"
            className="h-8 w-8 rounded-full object-cover mr-2 border-2 border-dental-blue group-hover:scale-110 group-focus:scale-110 transition-transform duration-150"
            style={{ minWidth: 32 }}
          />
          <span
            className="font-bold text-base md:text-xl lg:text-2xl tracking-tight whitespace-nowrap transition-transform duration-150 transform group-hover:scale-110 group-focus:scale-110 cursor-pointer"
            style={{ letterSpacing: '-0.01em' }}
          >
            Gracia Dental Care
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">Services</Link>
          <a href="#doctors" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">Doctors</a>
          <a href="#about" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">About Us</a>
          <Link to="contacts" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">Contacts</Link>
        </div>

        <Link to="/services">
          <Button className="btn-primary px-3 py-2 text-sm md:px-6 md:py-3 md:text-base">
            <span className="block md:hidden">Book Appointment</span>
            <span className="hidden md:inline">Book an Appointment</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
