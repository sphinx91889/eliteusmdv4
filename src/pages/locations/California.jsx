import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function California() {
  const cities = [
    {
      name: "Los Angeles",
      path: "/locations/california/los-angeles",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "San Francisco",
      path: "/locations/california/san-francisco",
      image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="bg-accent-sage">
      <PageHero 
        title="California Locations" 
        backgroundImage="https://images.pexels.com/photos/2709964/pexels-photo-2709964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in California
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">California Practice Support</h2>
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services tailored to California's innovative healthcare landscape. 
            Our board-certified physicians specialize in supporting aesthetic practices across the Golden State, ensuring compliance 
            with California's stringent medical regulations.
          </p>
          <ul className="space-y-3 text-primary-dark mb-8">
            <li>• Full compliance with California Medical Board regulations</li>
            <li>• Specialized support for medical spas and aesthetic clinics</li>
            <li>• Comprehensive medical oversight across major metropolitan areas</li>
            <li>• Standardized protocols meeting California requirements</li>
            <li>• Multilingual support available</li>
            <li>• Custom protocols for California's diverse markets</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-secondary text-center">
          Select Your City
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cities.map((city, index) => (
            <Link 
              to={city.path}
              key={index}
              className="group block bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={city.image}
                  alt={`Medical Director Services in ${city.name}, California`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {city.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose EliteUSMD in California?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">State Coverage</h3>
              <p className="text-gray-600">Extensive network across California's major metropolitan areas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of California's healthcare regulations and market needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Innovation Focus</h3>
              <p className="text-gray-600">Leading-edge protocols aligned with California's innovative healthcare landscape.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
