import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Texas() {
  const cities = [
    {
      name: "Houston",
      path: "/locations/texas/houston",
      image: "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Premier medical director services for Houston's thriving aesthetic market.",
      metaDescription: "Expert medical director services for Houston medical spas and aesthetic practices. Comprehensive compliance and oversight."
    },
    {
      name: "Dallas",
      path: "/locations/texas/dallas",
      image: "https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg",
      description: "Comprehensive medical oversight for Dallas-Fort Worth aesthetic practices.",
      metaDescription: "Leading medical director services in Dallas. Specialized support for medical spas and aesthetic clinics."
    },
    {
      name: "Austin",
      path: "/locations/texas/austin",
      image: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg",
      description: "Expert medical direction for Austin's innovative aesthetic practices.",
      metaDescription: "Austin's trusted medical director services. Expert compliance and oversight for aesthetic practices."
    },
    {
      name: "San Antonio",
      path: "/locations/texas/san-antonio",
      image: "https://images.pexels.com/photos/3930162/pexels-photo-3930162.jpeg",
      description: "Reliable medical director services for San Antonio practices.",
      metaDescription: "San Antonio medical director services. Comprehensive support for medical spas and aesthetic clinics."
    },
    {
      name: "Fort Worth",
      path: "/locations/texas/fort-worth",
      image: "https://images.pexels.com/photos/3930163/pexels-photo-3930163.jpeg",
      description: "Specialized medical oversight for Fort Worth aesthetic clinics.",
      metaDescription: "Fort Worth's leading medical director services. Expert compliance and practice support."
    },
    {
      name: "El Paso",
      path: "/locations/texas/el-paso",
      image: "https://images.pexels.com/photos/3930164/pexels-photo-3930164.jpeg",
      description: "Comprehensive medical director services for El Paso practices.",
      metaDescription: "El Paso medical director services. Bilingual support for aesthetic practices and medical spas."
    },
    {
      name: "Plano",
      path: "/locations/texas/plano",
      image: "https://images.pexels.com/photos/3930165/pexels-photo-3930165.jpeg",
      description: "Expert medical direction for Plano's luxury aesthetic market.",
      metaDescription: "Premium medical director services in Plano. Specialized support for luxury medical spas."
    }
  ];

  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Texas
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Texas Practice Support</h2>
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services tailored to Texas's diverse healthcare landscape. 
            Our board-certified physicians specialize in supporting aesthetic practices across the Lone Star State.
          </p>
          <ul className="space-y-3 text-primary-dark mb-8">
            <li>• Full compliance with Texas Medical Board regulations</li>
            <li>• Specialized support for medical spas and aesthetic clinics</li>
            <li>• Comprehensive medical oversight across major metropolitan areas</li>
            <li>• Good faith examination services</li>
            <li>• Bilingual support available</li>
            <li>• Custom protocols for Texas's diverse markets</li>
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
                  alt={`Medical Director Services in ${city.name}, Texas`}
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

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose EliteUSMD in Texas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Statewide Network</h3>
              <p className="text-gray-600">Extensive coverage across all major Texas metropolitan areas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Texas healthcare regulations and market dynamics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Customized Support</h3>
              <p className="text-gray-600">Tailored services for each unique Texas market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
