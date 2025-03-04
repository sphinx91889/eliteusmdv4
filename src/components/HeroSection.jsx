import React from 'react'
import { Link } from 'react-router-dom'
import VideoBackground from './VideoBackground'
import TypewriterText from './TypewriterText'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <VideoBackground />
      <div className="absolute bottom-24 left-0 z-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-[600px]">
            <div className="backdrop-blur-md bg-black/30 p-8 rounded-xl border border-white/10 shadow-2xl">
              <TypewriterText text="Expert Medical Director Services for Aesthetic Practices" speed={50} />
              <p className="text-xl text-white/90 mb-8">
                Ensure compliance, safety, and quality care in your practice with EliteUSMD's experienced medical directors.
              </p>
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg inline-block transition-colors"
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
