import { useTranslation } from '@/lib/TranslationProvider';

const LanguageToggleFooter = () => {
  const { language, setLanguage } = useTranslation();
  return (
    <div className="flex justify-center items-center gap-0 rounded-full bg-gray-100 p-1 w-fit mx-auto shadow-md">
      <button
        className={`transition-all duration-200 px-5 py-2 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 focus:z-10 ${language === 'en' ? 'bg-sky-700 text-white shadow' : 'bg-transparent text-gray-700 hover:bg-sky-100'}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        English
      </button>
      <button
        className={`transition-all duration-200 px-5 py-2 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 focus:z-10 ${language === 'id' ? 'bg-sky-700 text-white shadow' : 'bg-transparent text-gray-700 hover:bg-sky-100'}`}
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
      >
        Indonesian
      </button>
    </div>
  );
};

export default LanguageToggleFooter;