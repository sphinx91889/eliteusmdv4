import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUsSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('https://www.thoughtco.com/thmb/YNZwPfEciB9D40xyF99XT_kzmeg=/3873x2571/filters:fill(auto,1)/marble-941374788-5b16eaa4fa6bcc00369692c7.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl soft-gradient-overlay">
            <img 
              src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
              alt="EliteUSMD Medical Professionals"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-primary-dark">
              Welcome to <span className="text-secondary">EliteUSMD</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">About Us</h3>
            
            <p className="text-primary-dark mb-4">
              We believe starting a medical practice should be easier, 
              that's why we offer a service to outsource your medical director. 
              We have helped hundreds of RNs, NPs, and PAs start medical practices 
              by placing them with qualified medical directors.
            </p>
            
            <p className="text-primary-dark mb-6">
              We are a medical director placement business that makes hiring a medical 
              director fast and affordable. Start a medical clinic the easy way by outsourcing 
              your medical director. Save the expensive salary and operate in compliance 
              when you hire a medical director from EliteUSMD.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
