import React from 'react'
import PageHero from '../../components/PageHero'

export default function MedicalOversight() {
  return (
    <div>
      <PageHero 
        title="Medical Oversight" 
        backgroundImage="/images/medical-oversight.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive medical oversight services to ensure compliance, safety, and optimal patient care in your practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
