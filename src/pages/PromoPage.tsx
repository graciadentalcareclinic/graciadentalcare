import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FloatingMenu from '@/components/FloatingMenu';
import { useNavigate } from 'react-router-dom';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import { Button } from '@/components/ui/button';

const PROMOS = [
  'Promo Kids First Dental Visit',
  'Joyful Smile Scaling Treatment',
  'Hollywood Smile Make Over',
  'Best Choice Dental Implant',
  'Kids First Dental Visit',
  'Instant Teeth Whitening',
  'Promo Pasang Behel',
];

const PromoPage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAdd = (promo: string) => {
    if (!selected.includes(promo)) {
      setSelected(prev => [...prev, promo]);
    }
  };
  const handleRemove = (promo: string) => {
    setSelected(selected.filter(p => p !== promo));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-padding mx-auto py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-4 md:mt-0">Promos</h1>
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            {PROMOS.map((promo, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 border">
                <div className="font-bold text-base mb-1">{promo}</div>
                <div>
                  {selected.includes(promo) ? (
                    <Button variant="destructive" size="sm" onClick={() => handleRemove(promo)}>
                      Remove
                    </Button>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => handleAdd(promo)}>
                      Add Promo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8" id="selected-promos">
          <h2 className="text-xl font-semibold mb-2">Selected Promos</h2>
          {selected.length === 0 ? (
            <p className="text-gray-500">No promos selected yet.</p>
          ) : (
            <ul className="list-disc ml-6">
              {selected.map((promo, idx) => (
                <li key={idx}>{promo}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-12">
          <BookAppointmentForm doctorId={0} doctorName="" selectedServices={selected} />
        </div>
      </div>
      <FloatingMenu
        onAppointmentClick={() => navigate('/services')}
        onServicesClick={() => navigate('/services')}
        onPromoClick={() => navigate('/promo')}
      />
    </div>
  );
};

export default PromoPage;
