
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';
import { Language, getTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage: handleLanguageChange } = useLanguage();

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
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Gracia Dental Care Logo"
            className="h-8 w-8 rounded-full object-cover mr-4 border-2 border-dental-blue"
            style={{ minWidth: 32 }}
          />
          <span
            className="font-bold text-base md:text-xl lg:text-2xl tracking-tight whitespace-nowrap cursor-pointer"
            style={{ letterSpacing: '-0.01em' }}
            tabIndex={0}
          >
            Gracia Dental Care
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">
            {getTranslation('nav.services', language)}
          </Link>
          <Link to="/promo" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">
            {getTranslation('nav.promo', language)}
          </Link>
          <Link to="/#doctors" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">
            {getTranslation('nav.doctors', language)}
          </Link>
          <Link to="/#about" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">
            {getTranslation('nav.about', language)}
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">
            {getTranslation('nav.contact', language)}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageToggle
              currentLanguage={language}
              onLanguageChange={handleLanguageChange}
              variant="navbar"
            />
          </div>
          <Link to="/contacts">
            <Button className="btn-primary px-3 py-2 text-sm md:px-6 md:py-3 md:text-base">
              <span className="block md:hidden">{getTranslation('nav.book', language)}</span>
              <span className="hidden md:inline">{getTranslation('nav.book', language)}</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
