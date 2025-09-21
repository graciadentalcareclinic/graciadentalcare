import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/TranslationProvider';

interface ValidationModalProps {
  open: boolean;
  onContinue: () => void;
  onGoBack: () => void;
  formData: Record<string, any>;
  fields: { label: string; value: string | string[] }[];
}

const ValidationModal: React.FC<ValidationModalProps> = ({ open, onContinue, onGoBack, formData, fields }) => {
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backdropFilter: 'blur(6px)', background: 'rgba(0,0,0,0.3)' }}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-center text-sky-800">{t('validationModal.heading')}</h2>
        <div className="mb-6 space-y-2">
          {fields.map((field, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="font-semibold text-gray-700 min-w-[120px]">{field.label}:</span>
              <span className="text-gray-900">{Array.isArray(field.value) ? field.value.join(', ') : field.value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Button className="btn-primary" onClick={onContinue}>{t('validationModal.continue')}</Button>
          <Button variant="secondary" onClick={onGoBack}>{t('validationModal.goBack')}</Button>
        </div>
      </div>
    </div>
  );
};

export default ValidationModal;