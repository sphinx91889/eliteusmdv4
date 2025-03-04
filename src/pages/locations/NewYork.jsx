import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function NewYork() {
  const cities = [
    {
      name: "New York City",
      path: "/locations/new-york/nyc",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Medical director services for NYC's premier aesthetic practices."
    },
    {
      name: "Long Island",
      path: "/locations/new-york/long-island",
      image: "https://images.pexels.com/photos/3855639/pexels-photo-3855639.jpeg",
      description: "Comprehensive medical oversight for Long Island clinics."
    },
    {
      name: "Buffalo",
      path: "/locations/new-york/buffalo",
      image: "https://images.pexels.com/photos/3855640/pexels-photo-3855640.jpeg",
      description: "Expert medical direction for Western New York practices."
    }
  ];

  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in New York
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">New York Practice Support</h2>
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services aligned with New York's stringent healthcare standards. 
            Our board-certified physicians ensure compliance and excellence for aesthetic practices across the Empire State.
          </p>
          <ul className="space-y-3 text-primary-dark mb-8">
            <li>• Compliance with NY State Department of Health regulations</li>
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
