import React from 'react'

export default function Dallas() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Dallas, Texas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Dallas Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers expert medical director services for Dallas-Fort Worth's thriving aesthetic market. 
              Our board-certified physicians provide comprehensive support tailored to the metroplex's unique needs.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Dallas County regulatory compliance</li>
              <li>• Comprehensive medical spa oversight</li>
              <li>• Practice growth strategies</li>
              <li>• Specialized support for DFW aesthetic clinics</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg"
              alt="Dallas Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
