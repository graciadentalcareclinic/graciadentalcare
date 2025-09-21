
import React from 'react';
import SectionHeading from './SectionHeading';
import { useTranslation } from '@/lib/TranslationProvider';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anastasia Satriyo",
    rating: 5,
    comment: "Pelayanannya ramah, tempat bersih dan dokter spesialis yang informatif, sabar dan pintar dalam menganalisa kondisi gigi serta memberikan solusi yang baik. Harga affordable dibandingkan klinik gigi lain",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXpG5qmzsajawpYZeEdmJkRKznjCnu9dk7mWEgyzGN8OQuEQ4A=w108-h108-p-rp-mo-ba3-br100"
  },
  {
    id: 2,
    name: "Mersi Liana",
    rating: 5,
    comment: "kliniknya rapi n bersih, letaknya lumayan juga sih agak bingung kalau baru pertama.. alatnya canggih yang untuk rotgen gigi 3 dimensi.. direkomendasikan dari drg. favorit saya...",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUbbs4S5jMkY4LvEqjwqYckv60Vc__NN3DILNxfHic2dr4DKXxe=w108-h108-p-rp-mo-ba4-br100"
  },
  {
    id: 3,
    name: "WatchMi",
    rating: 5,
    comment: "Pelayanan bagus dan ramah, menerima teman saya sebagai pasien darurat yg kawat giginya terlepas sebagian, admin kasi info dgn baik, dokternya masih muda, kerjanya cepat dan bagus. Harganya sangat bersahabat sekali. Banyak terima kasih ya, sukses selalu dan makin byk lagi langganannya.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUgeNwx9FxliveG8EbDU-eqIobJfiAp5IOgO-51QRDfbbMcq9FOAw=w108-h108-p-rp-mo-ba3-br100"
  }
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="py-20 bg-dental-blue-light">
      <div className="container-padding mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">TESTIMONIALS</span>
        </div>
        <SectionHeading>{t('testimonials.heading')}</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-with-shadow p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={`Photo of ${testimonial.name}, patient testimonial`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-4">{testimonial.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl p-4 px-6 shadow-md">
            <h4 className="font-semibold mb-2">Smiles That Speak for Themselves</h4>
            <p className="text-gray-600 text-sm">
              Here's what our happy patients have to say about their experience with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
