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
      <div className="flex items-center gap-1 text-[10px] font-medium text-gray-700">
        <span className="mr-1">Language</span>
        <button
          className={`px-1.5 py-0.5 rounded ${currentLanguage === 'en' ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-sky-100'}`}
          style={{ fontSize: '0.7em', minWidth: 22, minHeight: 18, lineHeight: '1' }}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
        <span className="mx-0.5">|</span>
        <button
          className={`px-1.5 py-0.5 rounded ${currentLanguage === 'id' ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-sky-100'}`}
          style={{ fontSize: '0.7em', minWidth: 22, minHeight: 18, lineHeight: '1' }}
          onClick={() => onLanguageChange('id')}
        >
          ID
        </button>
      </div>
    </div>
  );
};