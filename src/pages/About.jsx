import React from 'react'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <div>
      <PageHero 
        title="About EliteUSMD"
        backgroundImage="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Providing expert medical direction and compliance services for aesthetic practices across multiple states.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 card-title">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We are dedicated to ensuring the highest standards of patient care, safety, and regulatory compliance in aesthetic practices through expert medical direction and comprehensive oversight.
              </p>
              <p className="text-gray-600">
                Our team of board-certified physicians brings extensive experience in aesthetic medicine and practice management to support your success.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                alt="Medical professionals in consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 card-title text-center">Why Choose EliteUSMD</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-600">
                Board-certified physicians with extensive experience in aesthetic medicine and practice management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <p className="text-gray-600">
                Comprehensive understanding of regulatory requirements and best practices across multiple states.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-600">
                Dedicated guidance and support to ensure your practice's success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
