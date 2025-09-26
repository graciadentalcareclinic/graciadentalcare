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
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-16">
      <div className="container-padding mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-sky-700 drop-shadow-md mb-2">
            Your Perfect Smile Starts with <span className="text-blue-500">Gracia Dental Care</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Advanced dental care with a gentle touch. Book your appointment today.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contacts">
              <Button className="btn-primary flex items-center gap-2 text-base sm:text-lg p-4 sm:p-5">
                Book an Appointment
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
