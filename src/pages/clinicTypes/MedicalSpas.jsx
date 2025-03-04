import React from 'react'
import PageHero from '../../components/PageHero'

export default function MedicalSpas() {
  return (
    <>
      <PageHero 
        title="Medical Spa Medical Director Services"
        backgroundImage="https://images.pexels.com/photos/3762791/pexels-photo-3762791.jpeg"
      />
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Specialized Medical Spa Support</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD provides expert medical director services specifically designed for medical spas, 
                ensuring regulatory compliance, patient safety, and operational excellence.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Comprehensive medical oversight</li>
                <li>• Regulatory compliance management</li>
                <li>• Treatment protocol development</li>
                <li>• Staff training and supervision</li>
                <li>• Good faith examination services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3762791/pexels-photo-3762791.jpeg"
                alt="Medical Spa Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
