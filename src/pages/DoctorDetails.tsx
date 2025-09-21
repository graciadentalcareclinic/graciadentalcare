import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookAppointmentForm from '@/components/BookAppointmentForm';

// Import doctor data
const doctors = [
  {
    id: 1,
    name: "Charly Esmond Siagian",
    role: "Dokter Gigi Spesialis Periodonsia",
    category: "periodontist",
  image: "/charly.png",
    bio: "Charly Esmond Siagian adalah Dokter Gigi Spesialis Periodonsia yang berpengalaman dan berdedikasi pada kesehatan gusi dan jaringan penyangga gigi. Memberikan perawatan personal dan solusi terbaik untuk setiap pasien.",
    education: "University of Indonesia",
    specialties: ["Periodonsia", "Perawatan Gusi", "Implan Gigi"],
    availableDays: [
      { day: 'Senin', time: '10:00 - 21:00' },
      { day: 'Selasa', time: '10:00 - 21:00' },
      { day: 'Rabu', time: '10:00 - 17:00' },
      { day: 'Kamis', time: '10:00 - 21:00' },
      { day: 'Jumat', time: '10:00 - 17:00' }
    ]
  },
  {
    id: 2,
    name: "Desyanne Winardi",
    role: "Dokter Gigi Spesialis Ortodonsia",
    category: "orthodontist",
    image: "/Meio.jpg",
    bio: "Desyanne Winardi adalah Dokter Gigi Spesialis Ortodonsia yang berpengalaman dalam perawatan kawat gigi dan penataan gigi. Memberikan solusi ortodontik terbaik dengan pendekatan personal dan ramah.",
    education: "University of Indonesia",
    specialties: ["Ortodonsia", "Kawat Gigi", "Penataan Gigi"],
    availableDays: [
      { day: 'Senin', time: '10:00 - 21:00' },
      { day: 'Selasa', time: '10:00 - 21:00' },
      { day: 'Rabu', time: '10:00 - 17:00' },
      { day: 'Kamis', time: '10:00 - 21:00' },
      { day: 'Jumat', time: '10:00 - 17:00' }
    ]
  },
  {
    id: 3,
    name: "Bradley Melthon Siagian",
    role: "Dokter Gigi Umum",
    category: "dentist",
    image: "/Aian.jpeg",
    bio: "Bradley Melthon Siagian adalah Dokter Gigi Umum yang berpengalaman dalam perawatan gigi modern dan pencegahan. Fokus pada kenyamanan pasien dan hasil perawatan yang optimal.",
    education: "University of Indonesia",
    specialties: ["Perawatan Gigi Umum", "Pencegahan", "Perawatan Modern"],
    availableDays: [
      { day: 'Senin', time: '10:00 - 21:00' },
      { day: 'Selasa', time: '10:00 - 21:00' },
      { day: 'Rabu', time: '10:00 - 17:00' },
      { day: 'Kamis', time: '10:00 - 21:00' },
      { day: 'Jumat', time: '10:00 - 17:00' }
    ]
  },
  {
    id: 4,
    name: "Erwina Siagian",
    role: "Dokter Gigi",
    category: "dentist",
    image: "/Aseel.jpg",
    bio: "Erwina Siagian adalah dokter gigi yang berpengalaman dan berdedikasi pada perawatan gigi umum dan ortodontik. Memberikan solusi terbaik untuk senyum sehat dan indah.",
    education: "University of Adventist Philippines",
    specialties: ["Perawatan Gigi Umum", "Ortodonsia", "Kawat Gigi"],
    availableDays: [
      { day: 'Senin', time: '10:00 - 21:00' },
      { day: 'Selasa', time: '10:00 - 21:00' },
      { day: 'Rabu', time: '10:00 - 17:00' },
      { day: 'Kamis', time: '10:00 - 21:00' },
      { day: 'Jumat', time: '10:00 - 17:00' }
    ]
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = parseInt(id as string);
  const doctor = doctors.find(doc => doc.id === doctorId);
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-semibold mb-4">Doctor not found</h1>
          <Button onClick={() => navigate('/')}>Back to Homepage</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container-padding mx-auto py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={doctor.image} alt={`Photo of Dr. ${doctor.name}, ${doctor.role}`} className="w-40 h-40 rounded-full object-cover border-4 border-dental-blue mb-4 md:mb-0" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
                <h2 className="text-lg text-gray-600 mb-4">{doctor.role}</h2>
                <p className="mb-4 text-gray-700">{doctor.bio}</p>
                <p className="mb-2 text-gray-700"><strong>Education:</strong> {doctor.education}</p>
                <div className="mb-2 text-gray-700">
                  <strong>Specialties:</strong> {doctor.specialties.join(', ')}
                </div>
                {doctor.name === 'Charly Esmond Siagian' && Array.isArray(doctor.availableDays) && typeof doctor.availableDays[0] === 'object' ? (
                  <div className="mb-2 text-gray-700">
                    <strong>Jadwal Praktek:</strong>
                    <ul className="list-disc ml-6">
                      {doctor.availableDays.map((d: any, idx: number) => (
                        <li key={idx}>{d.day} {d.time}</li>
                      ))}
                    </ul>
                  </div>
                ) : doctor.availableDays && Array.isArray(doctor.availableDays) ? (
                  <div className="mb-2 text-gray-700">
                    <strong>Available Days:</strong> {doctor.availableDays.join(', ')}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDetails;
