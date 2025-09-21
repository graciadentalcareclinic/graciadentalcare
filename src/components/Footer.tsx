

const Footer = () => {
  return (
  <footer id="contacts" className="bg-white pt-16 pb-14">
      <div className="container-padding mx-auto">
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
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/graciadentalcare/" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
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
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="font-bold text-lg md:text-xl mb-1 text-sky-700">Gracia Dental Care</div>
              <div className="text-gray-700 mb-1 text-sm md:text-base">Jl. Kavling Polri No.1606 Blok F8, RT.8/RW.2, Jelambar, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460</div>
              <div className="text-gray-700 mb-1 text-sm md:text-base"><strong>Phone:</strong> <a href="tel:+62215658561" className="text-sky-600 hover:underline">(021) 5658561</a></div>
              <div className="text-gray-700 mb-1 text-sm md:text-base"><strong>Email:</strong> <a href="mailto:info@graciadentalcare.com" className="text-sky-600 hover:underline">info@graciadentalcare.com</a></div>
              <div className="text-gray-700 text-sm md:text-base"><strong>Jam Praktek:</strong> Senin, Selasa, Kamis : 10.00-21.00 | Rabu, Jumat : 10.00-17.00</div>
            </div>
          </div>
        </div>
        
        {/* Location heading and map visible on all devices */}
        <div className="flex flex-col items-center justify-center mt-8">
          <h4 className="font-semibold text-lg md:text-xl mb-4 text-sky-700 tracking-wide">Location</h4>
          <iframe
            title="Gracia Dental Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.669964073964!2d106.7829640758706!3d-6.176212160536019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e2e2e2e2e3%3A0x7e7e7e7e7e7e7e7e!2sGracia%20Dental%20Care!5e0!3m2!1sen!2sid!4v1695370000000!5m2!1sen!2sid"
            width="100%"
            height="220"
            className="max-w-xl w-full rounded-2xl border-0"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col items-center justify-center">
          {/* Mobile language toggle */}
          <div className="block md:hidden mb-4">
            <LanguageToggleFooter />
          </div>
          <div className="text-center text-gray-700 text-sm md:text-base font-medium max-w-xl w-full">
            © {new Date().getFullYear()} Gracia Dental Care. All Rights Reserved.<br />
            <span className="text-xs md:text-sm text-gray-500">Design by <a href="https://graciadentalcare.com" className="text-sky-700 hover:underline">graciadentalcare</a>. Website: <a href="https://graciadentalcare.com" className="text-sky-700 hover:underline">graciadentalcare.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import LanguageToggleFooter from './LanguageToggleFooter';
