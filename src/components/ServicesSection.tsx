import { Button } from '@/components/ui/button';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/TranslationProvider';

const services = [
  {
    titleKey: 'services.cosmetic.title',
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    altKey: 'services.cosmetic.alt',
    featuresKeys: ['services.cosmetic.feature1', 'services.cosmetic.feature2', 'services.cosmetic.feature3']
  },
  {
    titleKey: 'services.implants.title',
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1068&q=80",
    altKey: 'services.implants.alt',
    featuresKeys: ['services.implants.feature1', 'services.implants.feature2']
  },
  {
    titleKey: 'services.restorative.title',
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    altKey: 'services.restorative.alt',
    featuresKeys: ['services.restorative.feature1', 'services.restorative.feature2', 'services.restorative.feature3']
  }
];

const CheckIcon = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceCard = ({ titleKey, image, altKey, featuresKeys }: { titleKey: string; image: string; altKey: string; featuresKeys: string[] }) => {
  const { t } = useTranslation();
  return (
    <div className="card-with-shadow overflow-hidden rounded-lg bg-white">
      <div className="relative h-48">
        <img src={image} alt={t(altKey)} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{t(titleKey)}</h3>
        <ul className="space-y-2 mb-6">
          {featuresKeys.map((key, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <CheckIcon />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
        <Button className="btn-secondary w-full flex items-center justify-between">
          <span>{t('services.exploreMore')}</span>
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 bg-dental-blue-light lg:pt-40">
      <div className="container-padding mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">{t('services.heading')}</span>
        </div>
        <SectionHeading>{t('services.subheading')}</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-sky-700 rounded-full mb-2"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic font-medium text-center lg:text-left">
              {t('services.intro1')} <span className="text-sky-700 font-semibold">{t('services.intro2')}</span> {t('services.intro3')} <span className="text-sky-700 font-semibold">{t('services.intro4')}</span> {t('services.intro5')} <span className="text-sky-700 font-semibold">{t('services.intro6')}</span>,<br className="hidden sm:block" /> {t('services.intro7')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="btn-primary">
              {t('services.exploreAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
