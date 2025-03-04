import React from 'react'
import PageHero from '../../components/PageHero'

export default function WeightLossClinics() {
  return (
    <>
      <PageHero 
        title="Weight Loss Clinics Medical Director Services"
        backgroundImage="https://images.pexels.com/photos/6941347/pexels-photo-6941347.jpeg"
      />
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Specialized Weight Loss Clinic Support</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD provides comprehensive medical director services for weight loss clinics, 
                ensuring medical oversight, patient safety, and regulatory compliance.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Medical program development</li>
                <li>• Nutritional protocol oversight</li>
                <li>• Treatment safety management</li>
                <li>• Regulatory compliance</li>
                <li>• Patient care coordination</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6941347/pexels-photo-6941347.jpeg"
                alt="Weight Loss Clinic Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
