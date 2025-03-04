import React from 'react'

export default function SanFrancisco() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in San Francisco, California
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">San Francisco Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers expert medical director services for Bay Area aesthetic practices. 
              Our board-certified physicians provide comprehensive oversight tailored to San Francisco's unique market.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Bay Area regulatory compliance expertise</li>
              <li>• Tech-forward aesthetic practice support</li>
              <li>• Comprehensive medical oversight</li>
              <li>• Customized protocols for SF's sophisticated clientele</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
              alt="San Francisco Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
