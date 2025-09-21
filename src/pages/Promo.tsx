import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FloatingMenu from '@/components/FloatingMenu';
import { useNavigate } from 'react-router-dom';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/TranslationProvider';

const PROMO_KEYS = [
  'promo.kidsFirst',
  'promo.scaling',
  'promo.hollywood',
  'promo.implant',
  'promo.kidsVisit',
  'promo.whitening',
  'promo.behel',
];

const Promo: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-4 md:mt-0">{t('promo.heading')}</h1>
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            {PROMO_KEYS.map((promoKey, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 border">
                <div className="font-bold text-base mb-1">{t(promoKey)}</div>
                <div>
                  {selected.includes(promoKey) ? (
                    <Button variant="destructive" size="sm" onClick={() => handleRemove(promoKey)}>
                      {t('promo.remove')}
                    </Button>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => handleAdd(promoKey)}>
                      {t('promo.add')}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8" id="selected-promos">
          <h2 className="text-xl font-semibold mb-2">{t('promo.selectedHeading')}</h2>
          {selected.length === 0 ? (
            <p className="text-gray-500">{t('promo.noneSelected')}</p>
          ) : (
            <ul className="list-disc ml-6">
              {selected.map((promoKey, idx) => (
                <li key={idx}>{t(promoKey)}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-12 mb-6">
          <BookAppointmentForm doctorId={0} doctorName="" selectedServices={selected.map(k => t(k))} />
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

export default Promo;
