import  { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dayName = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
  <section className="pt-16 pb-10 sm:pt-20 sm:pb-16 lg:pt-24">
      <div className="container-padding mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center lg:items-stretch">
        <div className="flex flex-col justify-center lg:justify-start lg:self-start">
          <h1 className="leading-tight">
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-1">Your Perfect Smile Starts with</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-sky-700">Gracia Dental Care</span>
          </h1>
          <div className="mt-3 sm:mt-4 flex flex-col items-start">
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-sky-700 rounded-full mb-2"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic font-medium fancy-hero-desc">
              From <span className="text-sky-700 font-semibold">preventive care</span> to <span className="text-sky-700 font-semibold">advanced cosmetic</span> and <span className="text-sky-700 font-semibold">restorative treatments</span>,<br className="hidden sm:block" /> we provide a full range of dental services tailored to your needs.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contacts">
              <Button className="btn-primary flex items-center gap-2 text-base sm:text-lg p-4 sm:p-5">
                Book Appointment
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button className="btn-secondary flex items-center gap-2 text-base sm:text-lg p-4 sm:p-5">
                Explore more
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl p-4 sm:p-6 max-w-full sm:max-w-md">
            <h3 className="font-medium mb-3 sm:mb-4">Working Hours</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday – Thursday</span>
                <span className="font-medium">9 AM - 9 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday, Sunday</span>
                <span className="font-medium">10 AM - 6 PM</span>
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t">
                <span className="text-blue-600">Today {dayName},</span>
                <span className="font-medium">{timeString}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-0">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl max-w-xs sm:max-w-full mx-auto">
            <img
              src="./mainimg.jpeg"
              alt="Smiling woman with toothbrush"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
