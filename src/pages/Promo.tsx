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
      setSelected(prev => Array.from(new Set([...prev, promo])));
    }
  };
  const handleRemove = (promo: string) => {
  setSelected(prev => prev.filter(p => p !== promo));
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
        {selected.length > 0 && (
          <div className="mb-8" id="selected-promos">
            <h2 className="text-xl font-semibold mb-2">{t('promo.selectedHeading')}</h2>
            <ul className="list-disc ml-6">
              {[...new Set(selected)].map((promoKey, idx) => (
                <li
                  key={idx}
                  className="bg-sky-100 text-sky-800 font-semibold rounded px-2 py-1 my-1 transition-colors duration-200 border-2 border-sky-300 shadow"
                  style={{ boxShadow: '0 0 0 2px #38bdf8' }}
                >
                  {t(promoKey)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-12 mb-6">
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

export default Promo;
