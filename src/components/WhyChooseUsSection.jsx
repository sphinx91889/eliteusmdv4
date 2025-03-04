import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserMd, FaHandshake, FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa'

export default function WhyChooseUsSection() {
  const features = [
    { 
      icon: <FaUserMd className="text-secondary" />, 
      title: "15+ years, medical spa industry experience" 
    },
    { 
      icon: <FaClipboardCheck className="text-secondary" />, 
      title: "There are no placement fees" 
    },
    { 
      icon: <FaHandshake className="text-secondary" />, 
      title: "We place medical directors fast" 
    },
    { 
      icon: <FaMapMarkerAlt className="text-secondary" />, 
      title: "We handle multiple state requirements" 
    }
  ]

  return (
    <section className="py-16 svg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl soft-gradient-overlay">
            <img 
              src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="EliteUSMD Medical Professionals"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-4 text-primary-dark">
              Why <span className="text-secondary">Choose Us</span>
            </h2>
            
            <p className="text-primary-dark mb-6">
              EliteUSMD is a streamlined service that helps nurses, medical professionals, and laypersons 
              find the right medical director for their practice. With over 15 years of experience in the 
              medical spa industry, we bring deep expertise and a thorough understanding of clinic operations. 
              We prioritize efficiency, industry knowledge, and selecting only the most qualified medical directors.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-accent-sage/50 rounded-lg p-4 hover:bg-accent-sage/70 transition-colors"
                >
                  <div className="mr-4 text-2xl">
                    {feature.icon}
                  </div>
                  <span className="text-primary-dark font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
            
            <div>
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg inline-block transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
