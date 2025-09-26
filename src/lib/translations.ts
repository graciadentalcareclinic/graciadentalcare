interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.services": {
    en: "Services",
    id: "Layanan",
  },
  "nav.doctors": {
    en: "Doctors",
    id: "Dokter",
  },
  "nav.about": {
    en: "About Us",
    id: "Tentang Kami",
  },
  "nav.contact": {
    en: "Contact",
    id: "Kontak",
  },
  "nav.promo": {
    en: "Promo",
    id: "Promo",
  },
  "nav.book": {
    en: "Book Appointment",
    id: "Buat Janji",
  },

  // Hero Section
  "hero.title": {
    en: "Your Perfect Smile Starts With",
    id: "Senyum Sempurna Anda Dimulai Dengan",
  },
  "hero.subtitle": {
    en: "From preventive care to advanced cosmetic and restorative treatments,",
    id: "Dari perawatan preventif hingga perawatan kosmetik dan restoratif yang canggih,",
  },
  "hero.description": {
    en: "we provide a full range of dental services tailored to your needs.",
    id: "kami menyediakan berbagai layanan gigi yang disesuaikan dengan kebutuhan Anda.",
  },
  "hero.cta.book": {
    en: "Book Appointment",
    id: "Buat Janji",
  },
  "hero.cta.explore": {
    en: "Explore more",
    id: "Jelajahi",
  },

  // Services Section
  "services.title": {
    en: "Our Services",
    id: "Layanan Kami",
  },
  "services.description": {
    en: "Comprehensive dental care solutions tailored to your needs",
    id: "Solusi perawatan gigi komprehensif yang disesuaikan dengan kebutuhan Anda",
  },

  // Doctors Section
  "doctors.title": {
    en: "Our Doctors",
    id: "Dokter Kami",
  },
  "doctors.description": {
    en: "Meet our team of experienced dental professionals",
    id: "Temui tim dokter gigi profesional kami",
  },

  // About Section
  "about.title": {
    en: "About Us",
    id: "Tentang Kami",
  },
  "about.description": {
    en: "Learn more about our commitment to your dental health",
    id: "Pelajari lebih lanjut tentang komitmen kami terhadap kesehatan gigi Anda",
  },

  // Contact Section
  "contact.title": {
    en: "Contact Us",
    id: "Hubungi Kami",
  },
  "contact.description": {
    en: "Get in touch with us for any inquiries",
    id: "Hubungi kami untuk pertanyaan",
  },

  // Form Labels
  "form.name": {
    en: "Full Name",
    id: "Nama Lengkap",
  },
  "form.email": {
    en: "Email",
    id: "Email",
  },
  "form.phone": {
    en: "Phone Number",
    id: "Nomor Telepon",
  },
  "form.date": {
    en: "Preferred Date",
    id: "Tanggal yang Diinginkan",
  },
  "form.time": {
    en: "Preferred Time",
    id: "Waktu yang Diinginkan",
  },
  "form.reason": {
    en: "Reason for Visit",
    id: "Alasan Kunjungan",
  },
  "form.submit": {
    en: "Submit",
    id: "Kirim",
  },

  // Common
  "language": {
    en: "English",
    id: "Bahasa Indonesia",
  },
  "close": {
    en: "Close",
    id: "Tutup",
  },
};

export type Language = "en" | "id";

export const getTranslation = (key: string, lang: Language): string => {
  return translations[key]?.[lang] || key;
};
