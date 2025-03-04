import React from 'react'
import PageHero from '../../components/PageHero'

export default function MedicalSupervision() {
  return (
    <div>
      <PageHero 
        title="Professional Medical Supervision" 
        backgroundImage="/images/medical-supervision.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive medical supervision ensuring the highest standards of patient care and safety in your aesthetic practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
