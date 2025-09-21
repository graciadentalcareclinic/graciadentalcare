
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/TranslationProvider';

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

  const { language, setLanguage, t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  // Close dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-dropdown')) setLangOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [langOpen]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/80 shadow-2xl backdrop-blur-lg py-1 border-b border-gray-200'
        : 'bg-white/40 shadow-lg backdrop-blur-md py-2 border-b border-transparent'
    )}>
      <div className="container-padding mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group" tabIndex={0} aria-label={t('nav.home')}>
          <img
            src="/logo.jpg"
            alt="Gracia Dental Care Logo"
            className="h-8 w-8 rounded-full object-cover mr-3 border-2 border-dental-blue group-hover:scale-110 group-focus:scale-110 transition-transform duration-150"
            style={{ minWidth: 32 }}
          />
          <span
            className="font-bold text-base md:text-xl lg:text-2xl tracking-tight whitespace-nowrap transition-transform duration-150 transform group-hover:scale-110 group-focus:scale-110 cursor-pointer text-sky-700"
            style={{ letterSpacing: '-0.01em' }}
          >
            Gracia Dental Care
          </span>
        </Link>

  <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">{t('nav.services')}</Link>
          <Link to="/doctors" className="text-sm font-medium text-gray-700 hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('nav.doctors')}</Link>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">{t('nav.about')}</a>
          <Link to="contacts" className="text-sm font-medium text-gray-700 hover:text-dental-blue-dark transition-colors transform hover:scale-110 focus:scale-110 duration-150">{t('nav.contact')}</Link>
          {/* Language Dropdown - click to open */}
          {/* Language Dropdown only on desktop */}
          <div className="relative hidden md:block" id="lang-dropdown">
            <button
              className="flex items-center text-sm font-medium text-gray-700 hover:text-dental-blue-dark px-3 py-1 rounded transition-colors border border-gray-200 bg-white focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
              tabIndex={0}
            >
              <span className="mr-1">{language === 'en' ? 'English' : 'Indonesian'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50">
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 ${language === 'en' ? 'font-bold' : ''}`}
                  onClick={() => { setLanguage('en'); setLangOpen(false); }}
                  tabIndex={0}
                >English</button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 ${language === 'id' ? 'font-bold' : ''}`}
                  onClick={() => { setLanguage('id'); setLangOpen(false); }}
                  tabIndex={0}
                >Indonesian</button>
              </div>
            )}
          </div>
        </div>

        <Link to="/services">
          <Button className="btn-primary px-3 py-2 text-sm md:px-6 md:py-3 md:text-base">
            <span>{t('nav.bookAppointment')}</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
