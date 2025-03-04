import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedClinicSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Featured <span className="text-secondary">Clinic</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://www.myownspade.com/wp-content/uploads/2021/12/team-img1.jpg"
              alt="Spade Medical Spa Team"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-4 text-secondary">
              Spade Medical Spa
            </h3>
            
            <p className="text-primary-dark mb-6">
              EliteUSMD assisted Spade Medical Spa in securing a qualified medical director 
              and essential compliance documents when they launched their first location.
            </p>
            
            <p className="text-primary-dark mb-6">
              Since then, they have successfully expanded to multiple clinics, generating significant 
              annual revenue while maintaining the same medical director. Our medical director continues 
              to ensure that the team meets all state legal and compliance requirements.
            </p>
            
            <div>
              <Link
                to="/success-stories/spade-medical-spa"
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg inline-block transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
