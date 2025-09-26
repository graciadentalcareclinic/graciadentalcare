import React, { useEffect, useState } from 'react';
import { Language } from '@/lib/translations';
// ModernCopyrightProps interface for props
interface ModernCopyrightProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// ModernCopyright: Modern copyright section with animated heart and current date/time
const ModernCopyright: React.FC<ModernCopyrightProps> = ({ language, setLanguage }) => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const year = dateTime.getFullYear();
  const dateStr = dateTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return (
    <div className="flex flex-col items-center gap-1 text-xs sm:text-sm font-medium">
      <span>
        © {year} Gracia Dental Care. All Rights Reserved. Design by
        <a href="https://graciadentalcare.com" className="text-sky-600 font-semibold mx-1 hover:underline inline-flex items-center">
          graciadentalcare
          <span className="ml-1 animate-bounce" style={{ display: 'inline-block' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#e11d48"/>
            </svg>
          </span>
        </a>
      </span>
      <span className="text-gray-500 tracking-wide">{dateStr} • {timeStr}</span>
      <div className="mt-1 flex justify-center">
        <LanguageToggle
          currentLanguage={language}
          onLanguageChange={setLanguage}
          variant="footer"
        />
      </div>
    </div>
  );
};
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/lib/LanguageContext';


const Footer = () => {
  const { language, setLanguage: handleLanguageChange } = useLanguage();
  return (
    <footer id="contacts" className="bg-white pt-16 pb-8">
      <div className="container-padding mx-auto">
        {/* Restore Quick Links & Services to original stacked layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.jpg"
                alt="Gracia Dental Care Logo"
                className="h-8 w-8 rounded-full object-cover mr-2 border-2 border-dental-blue"
                style={{ minWidth: 32 }}
              />
              <span className="font-bold text-lg">Gracia Dental Care | Klinik Gigi Jakarta Barat</span>
            </div>
            <p className="text-gray-600 mb-4">
              Dentist & Dental Office<br />
              <span className="block font-semibold">𝗦𝗲𝗻𝘆𝘂𝗺 𝗦𝗲𝗺𝗽𝘂𝗿𝗻𝗮𝗺𝘂 𝗱𝗶𝗺𝘂𝗹𝗮𝗶 𝗱𝗮𝗿𝗶 𝘀𝗶𝗻𝗶</span>
            </p>
            <div className="mt-2">
              <LanguageToggle
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
                variant="footer"
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black">Services</a></li>
              <li><a href="#doctors" className="text-gray-600 hover:text-black">Doctors</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">General Dentistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Dental Implants</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Orthodontics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Pediatric Dentistry</a></li>
            </ul>
          </div>
        </div>
        
        {/* Modern Embedded Google Map with Clinic Details - no box/border */}
        <div className="w-full mb-0 mt-0 md:mt-[-16px] grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <iframe
              title="Gracia Dental Care Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.312073964479!2d106.7820194749937!3d-6.222964993768763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e2e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sGracia%20Dental%20Care!5e0!3m2!1sen!2sid!4v1695740000000!5m2!1sen!2sid"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-3">
              <div className="font-bold text-lg text-sky-700">Gracia Dental Care</div>
              <div className="text-gray-700 text-sm mb-2">
                <strong>Address:</strong> Jl. Kavling Polri No.1606 Blok F8, RT.8/RW.2, Jelambar, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460
              </div>
              <div className="text-gray-700 text-sm mb-2">
                <strong>Phone:</strong> <a href="tel:+62215658561" className="hover:text-black">(021) 5658561</a>
              </div>
              <div className="text-gray-700 text-sm mb-2">
                <strong>Email:</strong> <a href="mailto:info@graciadentalcare.com" className="hover:text-black">info@graciadentalcare.com</a>
              </div>
              <div className="text-gray-700 text-sm">
                <strong>Jam Praktek:</strong><br />
                Senin, Selasa, Kamis : 10.00-21.00<br />
                Rabu, Jumat : 10.00-17.00
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Instagram</h4>
            <div className="text-xs text-gray-500 mb-1">
              <a href="https://www.instagram.com/graciadentalcare/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 font-semibold">@graciadentalcare</a>
            </div>
            <a
              href="https://www.instagram.com/graciadentalcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full relative group"
              aria-label="View Instagram posts"
              style={{ textDecoration: 'none' }}
            >
              <iframe
                src="https://snapwidget.com/embed/1108781"
                title="Posts from Instagram"
                className="snapwidget-widget w-full h-[220px] md:h-[320px] lg:h-[510px] rounded-lg border-none pointer-events-none group-hover:opacity-90"
                allowTransparency
                frameBorder="0"
                scrolling="no"
                style={{ border: 'none', overflow: 'hidden', width: '100%' }}
              ></iframe>
              <span className="absolute inset-0 cursor-pointer" style={{ zIndex: 2 }}></span>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-8">
          <ModernCopyright language={language} setLanguage={handleLanguageChange} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
