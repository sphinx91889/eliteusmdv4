import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Arizona() {
  const cities = [
    {
      name: "Phoenix",
      path: "/locations/arizona/phoenix",
      image: "https://www.tripsavvy.com/thmb/BS2_bGMEJ7RZZQEFx5bCz3FByck=/2122x1413/filters:fill(auto,1)/GettyImages-1138165502-1daa3ff05ff54d2dadb274ae52c27f14.jpg",
      description: "Medical director services for Phoenix metropolitan practices."
    },
    {
      name: "Scottsdale",
      path: "/locations/arizona/scottsdale",
      image: "https://images.pexels.com/photos/3855641/pexels-photo-3855641.jpeg",
      description: "Comprehensive medical oversight for luxury Scottsdale clinics."
    },
    {
      name: "Tucson",
      path: "/locations/arizona/tucson",
      image: "https://images.pexels.com/photos/3855642/pexels-photo-3855642.jpeg",
      description: "Expert medical direction for Southern Arizona practices."
    }
  ];

  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Arizona
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Arizona Practice Support</h2>
          <p className="text-primary-dark mb-6">
            EliteUSMD delivers expert medical director services tailored to Arizona's unique healthcare landscape. 
            Our board-certified physicians provide comprehensive support for aesthetic practices across the Grand Canyon State.
          </p>
          <ul className="space-y-3 text-primary-dark mb-8">
            <li>• Compliance with Arizona Medical Board regulations</li>
            <li>• Specialized support for medical spas and aesthetic clinics</li>
            <li>• Comprehensive medical oversight</li>
            <li>• Good faith examination services</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-secondary text-center">
          Select Your City
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link 
              to={city.path} 
              key={index}
              className="group block bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={city.image} 
                  alt={`${city.name} Medical Practice`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-secondary mr-2" />
                  <h3 className="text-xl font-semibold text-primary-dark">
                    {city.name}
                  </h3>
                </div>
                <p className="text-primary-dark/70">
                  {city.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
