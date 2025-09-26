import React from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Language } from '@/lib/translations';

interface LanguageToggleFooterProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageToggleFooter: React.FC<LanguageToggleFooterProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="md:hidden">
      <LanguageToggle
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        variant="footer"
      />
    </div>
  );
};

export default LanguageToggleFooter;
