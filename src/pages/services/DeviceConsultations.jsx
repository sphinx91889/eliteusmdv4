import React from 'react'
import PageHero from '../../components/PageHero'

export default function DeviceConsultations() {
  return (
    <div>
      <PageHero 
        title="Laser/Device Purchase Consultations" 
        backgroundImage="/images/device-consultation.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Expert consultation services for laser and medical device purchases to optimize your practice investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
