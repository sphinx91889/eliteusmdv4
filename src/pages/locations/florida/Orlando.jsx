import React from 'react'

export default function Orlando() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Orlando, Florida
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Orlando Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers expert medical director services for Central Florida's growing aesthetic market. 
              Our board-certified physicians provide comprehensive support tailored to Orlando's unique needs.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Central Florida compliance expertise</li>
              <li>• Tourist market specialization</li>
              <li>• Comprehensive practice oversight</li>
              <li>• Orange County regulatory guidance</li>
              <li>• Customized protocols for diverse clientele</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5267557/pexels-photo-5267557.jpeg"
              alt="Orlando Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose EliteUSMD in Orlando?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Regional Knowledge</h3>
              <p className="text-gray-600">Extensive experience in Central Florida's healthcare landscape.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Tourism Expertise</h3>
              <p className="text-gray-600">Specialized protocols for tourist-heavy markets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Growth Support</h3>
              <p className="text-gray-600">Strategic guidance for practice expansion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
