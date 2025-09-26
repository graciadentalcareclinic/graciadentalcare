import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Dental Cleaning (Scaling)",
    description: "Professional teeth cleaning to remove plaque and tartar",
    price: 500000,
    category: "Preventive"
  },
  {
    id: 2,
    name: "Teeth Whitening",
    description: "Professional whitening treatment for a brighter smile",
    price: 2500000,
    category: "Cosmetic"
  },
  {
    id: 3,
    name: "Dental Filling",
    description: "Tooth-colored composite filling for cavities",
    price: 750000,
    category: "Restorative"
  },
  {
    id: 4,
    name: "Root Canal Treatment",
    description: "Treatment for infected or damaged tooth pulp",
    price: 2000000,
    category: "Endodontic"
  },
  {
    id: 5,
    name: "Dental Crown",
    description: "Custom-made cap to cover damaged tooth",
    price: 3000000,
    category: "Restorative"
  }
];

const Promo: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (service: Service) => {
    setSelectedServices(prev => [...prev, service]);
    setCartVisible(true);
    // Scroll to cart preview
    const cartPreview = document.getElementById('cart-preview');
    if (cartPreview) {
      cartPreview.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const removeFromCart = (serviceId: number) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleCheckout = () => {
    if (!name || !whatsapp) {
      alert('Please enter your name and WhatsApp number');
      return;
    }

    const message = `Hello Gracia Dental Care I am interested in the following services:%0A%0A${selectedServices
      .map((service) => `- ${service.name} (${formatPrice(service.price)})`)
      .join('%0A')}%0A%0ATotal: ${formatPrice(getTotalPrice())}%0A%0AName: ${name}%0AWhatsApp: ${whatsapp}`;
    
    window.open(`https://wa.me/6285210121788?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container-padding mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sky-700 font-semibold mb-8 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sky-700 font-bold text-lg">
                  {formatPrice(service.price)}
                </span>
                <Button
                  onClick={() => addToCart(service)}
                  variant="default"
                  size="sm"
                  className="bg-sky-600 hover:bg-sky-700 text-white"
                >
                  Add to Services
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedServices.length > 0 && (
          <div id="cart-preview" className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Services</h2>
            <div className="space-y-4 mb-6">
              {selectedServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{service.name}</h3>
                    <p className="text-sm text-sky-700 font-semibold">{formatPrice(service.price)}</p>
                  </div>
                  <Button
                    onClick={() => removeFromCart(service.id)}
                    variant="destructive"
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-600 focus:border-sky-600"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-800 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-600 focus:border-sky-600"
                    placeholder="Enter your WhatsApp number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-sky-700">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                size="lg"
              >
                Ask about a promo
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promo;
