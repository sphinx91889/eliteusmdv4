import React from 'react'

export default function Tampa() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Tampa, Florida
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Tampa Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for Tampa Bay area aesthetic practices. 
              Our experienced physicians ensure compliance while supporting your practice's growth in West Florida.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Tampa Bay area compliance expertise</li>
              <li>• Gulf Coast market specialization</li>
              <li>• Full-service medical oversight</li>
              <li>• Hillsborough County regulatory guidance</li>
              <li>• Custom protocols for local demographics</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2880712/pexels-photo-2880712.jpeg"
              alt="Tampa Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose EliteUSMD in Tampa?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Local Presence</h3>
              <p className="text-gray-600">Strong understanding of Tampa Bay's healthcare market.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Coastal Expertise</h3>
              <p className="text-gray-600">Specialized knowledge for Gulf Coast practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Community Focus</h3>
              <p className="text-gray-600">Deep connections with local healthcare networks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
