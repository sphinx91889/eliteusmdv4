import React from 'react'
import PageHero from '../../components/PageHero'

export default function Training() {
  return (
    <div>
      <PageHero 
        title="Additional Procedure & Technique Training" 
        backgroundImage="/images/medical-training.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Specialized training programs for advanced procedures and techniques to enhance your practice capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
