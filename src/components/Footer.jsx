import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0afad4d53b60bf02a8bd3.png"
                alt="EliteUSMD Logo"
                className="h-20 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/80">
              Expert medical director services for aesthetic practices across multiple states.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link to="/services/medical-supervision" className="text-white/80 hover:text-white">Medical Supervision</Link></li>
              <li><Link to="/services/medical-director" className="text-white/80 hover:text-white">Medical Director</Link></li>
              <li><Link to="/services/chart-review" className="text-white/80 hover:text-white">Chart Review</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center">
                <FaPhone className="mr-2" /> (888) 555-0123
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> info@eliteusmd.com
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Serving CA, TX, FL, NY, NV, AZ
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} EliteUSMD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
