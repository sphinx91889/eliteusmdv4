import React from 'react'

export default function FortWorth() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Fort Worth, Texas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Fort Worth Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers specialized medical director services for Fort Worth's growing aesthetic market. 
              Our board-certified physicians provide comprehensive support in the heart of Tarrant County.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Tarrant County compliance expertise</li>
              <li>• Comprehensive medical spa oversight</li>
              <li>• Practice development strategies</li>
              <li>• Customized regulatory guidance</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3930163/pexels-photo-3930163.jpeg"
              alt="Fort Worth Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
