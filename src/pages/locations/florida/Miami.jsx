import React from 'react'

export default function Miami() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Miami, Florida
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Miami Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for Miami's thriving aesthetic industry. 
              Our experienced physicians ensure compliance while supporting your practice's success in South Florida's 
              competitive market.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Miami-Dade County compliance expertise</li>
              <li>• Bilingual support for diverse practices</li>
              <li>• Luxury medical spa oversight</li>
              <li>• South Florida regulatory guidance</li>
              <li>• Custom protocols for Miami's unique clientele</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/421655/pexels-photo-421655.jpeg"
              alt="Miami Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose EliteUSMD in Miami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Miami's aesthetic market and regulatory environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Cultural Competence</h3>
              <p className="text-gray-600">Tailored services for Miami's diverse patient demographics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Luxury Focus</h3>
              <p className="text-gray-600">Specialized support for high-end aesthetic practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
