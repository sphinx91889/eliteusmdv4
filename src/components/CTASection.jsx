import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative h-[500px]">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/4487124/4487124-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="backdrop-blur-md bg-white/10 w-full h-full border-y border-white/20 shadow-2xl flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to <span className="text-secondary">Elevate</span> Your Practice?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Discover how EliteUSMD can transform your medical practice with expert medical director services.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
