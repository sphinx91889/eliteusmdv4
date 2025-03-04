import React from 'react'

export default function Austin() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Austin, Texas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Austin Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides innovative medical director services for Austin's cutting-edge aesthetic practices. 
              Our physicians offer comprehensive support tailored to the unique needs of this tech-forward market.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Travis County compliance expertise</li>
              <li>• Innovative practice support</li>
              <li>• Tech-industry focused medical oversight</li>
              <li>• Customized protocols for Austin's dynamic market</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg"
              alt="Austin Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
