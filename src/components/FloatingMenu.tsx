import React from 'react';
import { useNavigate } from 'react-router-dom';

const whatsappNumber = '6285210121788';

const FloatingMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleServicesClick = () => {
    navigate('/services');
  };

  const handleAppointmentClick = () => {
    navigate('/contacts');
  };

  const handlePromoClick = () => {
    navigate('/promo');
  };

  const BottomMenu = () => (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-2 bg-white shadow-2xl border-t border-gray-200 md:hidden">
      <button className="flex flex-col items-center flex-1 focus:outline-none" onClick={handleWhatsAppClick}>
        <svg className="floating-menu-icon" width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M12 2C6.48 2 2 6.48 2 12c0 2.01.75 3.85 2 5.28V22l4.09-2.18C9.46 19.93 10.71 20 12 20c5.52 0 10-4.48 10-10S17.52 2 12 2Zm-1.25 14.5c-2.5-1.09-4.25-3.09-4.25-5.5 0-3.04 2.96-5.5 6.5-5.5s6.5 2.46 6.5 5.5-2.96 5.5-6.5 5.5c-.41 0-.81-.03-1.2-.08l-2.3 1.22.25-2.14Z"/>
        </svg>
        <span className="text-xs mt-1 font-semibold text-sky-500" style={{ fontFamily: 'inherit' }}>WhatsApp</span>
      </button>
      <button className="flex flex-col items-center flex-1 focus:outline-none" onClick={handleServicesClick}>
        <svg className="floating-menu-icon" width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M12 2c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4Zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/>
        </svg>
        <span className="text-xs mt-1 font-semibold text-sky-500" style={{ fontFamily: 'inherit' }}>Services</span>
      </button>
      <button className="flex flex-col items-center flex-1 focus:outline-none" onClick={handlePromoClick}>
        <svg className="floating-menu-icon" width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M20.59 13.41 12 22l-8.59-8.59a2 2 0 0 1 0-2.82l7.59-7.59a2 2 0 0 1 2.82 0l7.59 7.59a2 2 0 0 1 0 2.82ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
        <span className="text-xs mt-1 font-semibold text-sky-500" style={{ fontFamily: 'inherit' }}>Promo</span>
      </button>
      <button className="flex flex-col items-center flex-1 focus:outline-none" onClick={handleAppointmentClick}>
        <svg className="floating-menu-icon" width="20" height="20" fill="none" viewBox="0 0 24 24">
          <rect width="18" height="16" x="3" y="5" fill="#0ea5e9" rx="2"/>
          <path fill="#fff" d="M7 9h2v2H7V9Zm4 0h2v2h-2V9Zm4 0h2v2h-2V9Z"/>
        </svg>
        <span className="text-xs mt-1 font-semibold text-sky-500" style={{ fontFamily: 'inherit' }}>Appointment</span>
      </button>
    </nav>
  );

  const SideMenu = () => (
    <nav className="fixed bottom-2 right-2 z-50 flex flex-col items-center gap-2 px-1 py-2 rounded-xl shadow-xl bg-gradient-to-b from-navy-900 via-sky-400 to-purple-900 md:flex hidden" style={{ minHeight: 120, maxHeight: 200 }}>
      <button className="flex items-center justify-center p-1 rounded-lg bg-white/80 hover:bg-sky-100 transition focus:outline-none group" style={{ width: 32, height: 32 }} onClick={handleWhatsAppClick}>
        <svg className="floating-menu-icon transition-transform duration-200 group-hover:scale-110" width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M12 2C6.48 2 2 6.48 2 12c0 2.01.75 3.85 2 5.28V22l4.09-2.18C9.46 19.93 10.71 20 12 20c5.52 0 10-4.48 10-10S17.52 2 12 2Zm-1.25 14.5c-2.5-1.09-4.25-3.09-4.25-5.5 0-3.04 2.96-5.5 6.5-5.5s6.5 2.46 6.5 5.5-2.96 5.5-6.5 5.5c-.41 0-.81-.03-1.2-.08l-2.3 1.22.25-2.14Z"/>
        </svg>
      </button>
      <button className="flex items-center justify-center p-1 rounded-lg bg-white/80 hover:bg-sky-100 transition focus:outline-none group" style={{ width: 32, height: 32 }} onClick={handleServicesClick}>
        <svg className="floating-menu-icon transition-transform duration-200 group-hover:scale-110" width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M12 2c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4Zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/>
        </svg>
      </button>
      <button className="flex items-center justify-center p-1 rounded-lg bg-white/80 hover:bg-sky-100 transition focus:outline-none group" style={{ width: 32, height: 32 }} onClick={handlePromoClick}>
        <svg className="floating-menu-icon transition-transform duration-200 group-hover:scale-110" width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path fill="#0ea5e9" d="M20.59 13.41 12 22l-8.59-8.59a2 2 0 0 1 0-2.82l7.59-7.59a2 2 0 0 1 2.82 0l7.59 7.59a2 2 0 0 1 0 2.82ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
      </button>
      <button className="flex items-center justify-center p-1 rounded-lg bg-white/80 hover:bg-sky-100 transition focus:outline-none group" style={{ width: 32, height: 32 }} onClick={handleAppointmentClick}>
        <svg className="floating-menu-icon transition-transform duration-200 group-hover:scale-110" width="18" height="18" fill="none" viewBox="0 0 24 24">
          <rect width="18" height="16" x="3" y="5" fill="#0ea5e9" rx="2"/>
          <path fill="#fff" d="M7 9h2v2H7V9Zm4 0h2v2h-2V9Zm4 0h2v2h-2V9Z"/>
        </svg>
      </button>
    </nav>
  );

  return isMobile ? <BottomMenu /> : <SideMenu />;
};

export default FloatingMenu;
