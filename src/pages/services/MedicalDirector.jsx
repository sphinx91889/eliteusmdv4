import React from 'react'
import PageHero from '../../components/PageHero'

export default function MedicalDirector() {
  return (
    <div>
      <PageHero 
        title="Medical Director" 
        backgroundImage="/images/medical-director.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Expert medical direction services providing oversight, guidance, and compliance assurance for your practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
