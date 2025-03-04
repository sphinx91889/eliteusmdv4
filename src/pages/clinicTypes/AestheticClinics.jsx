import React from 'react'
import PageHero from '../../components/PageHero'

export default function AestheticClinics() {
  return (
    <>
      <PageHero 
        title="Aesthetic Clinics Medical Director Services"
        backgroundImage="https://images.pexels.com/photos/4173354/pexels-photo-4173354.jpeg"
      />
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Tailored Aesthetic Clinic Support</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD offers specialized medical director services for aesthetic clinics, 
                providing expert guidance, compliance management, and operational support.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Comprehensive medical leadership</li>
                <li>• Regulatory compliance strategies</li>
                <li>• Treatment protocol optimization</li>
                <li>• Staff training and development</li>
                <li>• Patient safety protocols</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4173354/pexels-photo-4173354.jpeg"
                alt="Aesthetic Clinic Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
