import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Doctor = {
  id: number;
  name: string;
  role: string;
  category: string;
  image: string;
  availableDays: string[];
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Charly Esmond Siagian",
    role: "Dokter Gigi Spesialis Periodonsia",
    category: "surgeon",
  image: "/charly.png",
    availableDays: [
      "Senin 10:00 - 21:00",
      "Selasa 10:00 - 21:00",
      "Rabu 10:00 - 17:00",
      "Kamis 10:00 - 21:00",
      "Jumat 10:00 - 17:00"
    ]
  },
  {
    id: 2,
    name: "Desyanne Winardi",
    role: "Dokter Gigi Spesialis Ortodonsia",
    category: "orthodontist",
    image: "./Meio.jpg",
    availableDays: [
      "Senin 10:00 - 21:00",
      "Selasa 10:00 - 21:00",
      "Rabu 10:00 - 17:00",
      "Kamis 10:00 - 21:00",
      "Jumat 10:00 - 17:00"
    ]
  },
  {
    id: 3,
    name: "Bradley Melthon Siagian",
    role: "Dokter Gigi Umum",
    category: "dentist",
    image: "./Aian.jpeg",
    availableDays: [
      "Senin 10:00 - 21:00",
      "Selasa 10:00 - 21:00",
      "Rabu 10:00 - 17:00",
      "Kamis 10:00 - 21:00",
      "Jumat 10:00 - 17:00"
    ]
  },
  {
    id: 4,
    name: "Erwina Siagian",
    role: "Dokter Gigi",
    category: "dentist",
    image: "./Aseel.jpg",
    availableDays: [
      "Senin 10:00 - 21:00",
      "Selasa 10:00 - 21:00",
      "Rabu 10:00 - 17:00",
      "Kamis 10:00 - 21:00",
      "Jumat 10:00 - 17:00"
    ]
  },
];

const DoctorsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filteredDoctors = activeFilter === 'all'
    ? doctors
    : doctors.filter(doctor => doctor.category === activeFilter);

  const handleDoctorClick = (doctorId: number) => {
    navigate(`/doctor/${doctorId}`);
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container-padding mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
            OUR DOCTORS
          </span>
        </div>
  <SectionHeading>Dental Experts You Can Trust</SectionHeading>

        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-8">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${activeFilter === 'all' ? 'bg-dental-blue text-black hover:bg-dental-blue-dark' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Experts
          </Button>
          <Button
            variant={activeFilter === 'dentist' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${activeFilter === 'dentist' ? 'bg-dental-blue text-black hover:bg-dental-blue-dark' : ''}`}
            onClick={() => setActiveFilter('dentist')}
          >
            Dentists
          </Button>
          <Button
            variant={activeFilter === 'surgeon' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${activeFilter === 'surgeon' ? 'bg-dental-blue text-black hover:bg-dental-blue-dark' : ''}`}
            onClick={() => setActiveFilter('surgeon')}
          >
            Surgeons
          </Button>
          <Button
            variant={activeFilter === 'orthodontist' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${activeFilter === 'orthodontist' ? 'bg-dental-blue text-black hover:bg-dental-blue-dark' : ''}`}
            onClick={() => setActiveFilter('orthodontist')}
          >
            Orthodontists
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {filteredDoctors.map((doctor, idx) => {
            // Assign a different bg color per card
            const bgColors = [
              'bg-blue-100',
              'bg-green-100',
              'bg-yellow-100',
              'bg-pink-100',
            ];
            const cardBg = bgColors[idx % bgColors.length];
            return (
              <div
                key={doctor.id}
                className={`card-with-shadow overflow-hidden group cursor-pointer ${cardBg}`}
                onClick={() => handleDoctorClick(doctor.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.role}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Available: {doctor.availableDays.join(", ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-600 max-w-md">
            Each of our dentists, hygienists, and specialists brings years of expertise and advanced training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
