import React from 'react'

export default function SanAntonio() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in San Antonio, Texas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">San Antonio Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for San Antonio's diverse aesthetic market. 
              Our experienced physicians ensure compliance and support practice growth in this historic Texas city.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Bexar County regulatory compliance</li>
              <li>• Bilingual practice support</li>
              <li>• Comprehensive medical oversight</li>
              <li>• Culturally sensitive practice guidance</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3930162/pexels-photo-3930162.jpeg"
              alt="San Antonio Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
