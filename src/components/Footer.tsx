
import LanguageToggleFooter from './LanguageToggleFooter';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-sky-100 via-white to-white pt-16 pb-10 border-t border-sky-200">
      <div className="container-padding mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-16">
          {/* Brand & Socials */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Gracia Dental Care Logo" className="h-12 w-12 rounded-full border-2 border-sky-400 shadow-md object-cover" />
              <span className="font-extrabold text-2xl text-sky-800 tracking-tight">Gracia Dental Care</span>
            </div>
            <p className="text-gray-600 text-center md:text-left text-base max-w-xs">Dentist & Dental Office<br /><span className="block font-semibold text-sky-700">Senyum Sempurnamu dimulai dari sini</span></p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/graciadentalcare/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-sky-200 p-2 hover:bg-pink-100 hover:border-pink-400 transition-colors shadow-sm" aria-label="Instagram">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
              </a>
              <a href="https://wa.me/6285210121788" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-sky-200 p-2 hover:bg-green-100 hover:border-green-400 transition-colors shadow-sm" aria-label="WhatsApp">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.94 14.25L2 22l5.93-1.56A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.09-1.13l-.29-.17-3.51.92.94-3.43-.19-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8Zm4.43-5.34c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.23-.62.78-.76.94-.14.16-.28.18-.51.07-.24-.12-.99-.36-1.89-1.13-.7-.62-1.18-1.38-1.32-1.61-.14-.23-.02-.36.1-.48.1-.1.23-.27.34-.4.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.57-1.23-.78-1.68-.21-.45-.42-.39-.58-.4-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.3-.23.24-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.57.13.17 1.7 2.6 4.11 3.54.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-lg font-semibold text-sky-700 mb-2 tracking-wide">Navigation</h3>
            <nav className="flex flex-col gap-1 text-base">
              <a href="#" className="hover:text-sky-700 transition-colors">Home</a>
              <a href="#about" className="hover:text-sky-700 transition-colors">About Us</a>
              <a href="#services" className="hover:text-sky-700 transition-colors">Services</a>
              <a href="#doctors" className="hover:text-sky-700 transition-colors">Doctors</a>
              <a href="#testimonials" className="hover:text-sky-700 transition-colors">Testimonials</a>
            </nav>
          </div>
          {/* Contact & Map */}
          <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-lg font-semibold text-sky-700 mb-2 tracking-wide">Contact</h3>
            <div className="text-gray-700 text-base">
              <div className="mb-1"><strong>Phone:</strong> <a href="tel:+62215658561" className="text-sky-700 hover:underline">(021) 5658561</a></div>
              <div className="mb-1"><strong>Email:</strong> <a href="mailto:info@graciadentalcare.com" className="text-sky-700 hover:underline">info@graciadentalcare.com</a></div>
              <div className="mb-1"><strong>Address:</strong> Jl. Kavling Polri No.1606 Blok F8, Jelambar, Jakarta Barat</div>
              <div className="mb-1"><strong>Jam Praktek:</strong> Senin, Selasa, Kamis : 10.00-21.00 | Rabu, Jumat : 10.00-17.00</div>
            </div>
            <div className="w-full mt-2 rounded-2xl overflow-hidden shadow-md border border-sky-100">
              <iframe
                title="Gracia Dental Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.669964073964!2d106.7829640758706!3d-6.176212160536019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e2e2e2e2e3%3A0x7e7e7e7e7e7e7e7e!2sGracia%20Dental%20Care!5e0!3m2!1sen!2sid!4v1695370000000!5m2!1sen!2sid"
                width="100%"
                height="120"
                className="border-0 w-full"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="block md:hidden mb-2">
            <LanguageToggleFooter />
          </div>
          <div className="text-center md:text-left text-gray-700 text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Gracia Dental Care. All Rights Reserved.<br />
            <span className="text-xs md:text-sm text-gray-500">Design by <a href="https://graciadentalcare.com" className="text-sky-700 hover:underline">graciadentalcare</a>. Website: <a href="https://graciadentalcare.com" className="text-sky-700 hover:underline">graciadentalcare.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
