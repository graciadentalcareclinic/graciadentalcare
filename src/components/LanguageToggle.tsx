import React from 'react';
import { Button } from './ui/button';
import { Language } from '@/lib/translations';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: 'navbar' | 'footer';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  variant = 'navbar'
}) => {
  return variant === 'navbar' ? (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="text-sm"
      >
        EN
      </Button>
      <span className="text-gray-400">|</span>
      <Button
        variant={currentLanguage === 'id' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('id')}
        className="text-sm"
      >
        ID
      </Button>
    </div>
  ) : (
    <div className="w-full flex justify-center md:hidden">
      <div className="flex items-center gap-4 max-w-[300px]">
        <Button
          variant={currentLanguage === 'en' ? 'default' : 'outline'}
          size="lg"
          onClick={() => onLanguageChange('en')}
          className="flex-1"
        >
          English
        </Button>
        <Button
          variant={currentLanguage === 'id' ? 'default' : 'outline'}
          size="lg"
          onClick={() => onLanguageChange('id')}
          className="flex-1"
        >
          Bahasa
        </Button>
      </div>
    </div>
  );
};