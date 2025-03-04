import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Services() {
  const services = [
    {
      title: "Professional Medical Supervision",
      path: "/services/medical-supervision"
    },
    {
      title: "Medical Director",
      path: "/services/medical-director"
    },
    {
      title: "Chart Review And Patient Assessment",
      path: "/services/chart-review"
    },
    {
      title: "Additional Procedure & Technique Training",
      path: "/services/training"
    },
    {
      title: "Medical Oversight",
      path: "/services/medical-oversight"
    },
    {
      title: "Laser/Device Purchase Consultations",
      path: "/services/device-consultations"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Our Services"
        backgroundImage="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
      />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
