import React from 'react'

export default function ElPaso() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in El Paso, Texas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">El Paso Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides specialized medical director services for El Paso's unique border market. 
              Our physicians offer comprehensive support with a focus on cross-cultural healthcare needs.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Border region compliance expertise</li>
              <li>• Bilingual practice support</li>
              <li>• Cross-cultural medical oversight</li>
              <li>• Specialized border market strategies</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3930164/pexels-photo-3930164.jpeg"
              alt="El Paso Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
