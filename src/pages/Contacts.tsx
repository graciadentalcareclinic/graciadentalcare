import React from 'react';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <img
          src="/logo.jpg"
          alt="Gracia Dental Care Logo"
          className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-dental-blue"
          style={{ minWidth: 40 }}
        />
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> Jl. Kavling Polri No.1606 Blok F8, RT.8/RW.2, Jelambar, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460
            </p>
            <p>
              <strong>Phone:</strong> (021) 5658561
            </p>
            <p>
              <strong>Email:</strong> info@graciadentalcare.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Closed &bull; Opens 8.00 am Mon
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Book Your Appointment</h2>
          <p className="mb-4">
            Ready to transform your smile? Contact us today to schedule your appointment.
            Our friendly staff is here to help you with any questions you may have.
          </p>
          <button
            className="bg-dental-blue text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            onClick={() => window.location.href = 'tel:+62215658561'}
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 