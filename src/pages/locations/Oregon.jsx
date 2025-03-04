import React from 'react'

export default function Oregon() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">Medical Director Services in Oregon</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Oregon Practice Support</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers tailored medical director services that meet Oregon's specific healthcare regulations. 
              Our physicians provide expert support for aesthetic practices throughout the state.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Compliance with Oregon healthcare guidelines</li>
              <li>• Specialized support for medical spas and aesthetic clinics</li>
              <li>• Comprehensive medical oversight</li>
              <li>• Good faith examination services</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4348542/pexels-photo-4348542.jpeg"
              alt="Oregon Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
