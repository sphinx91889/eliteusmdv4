import React from 'react';
import PageHero from '../../components/PageHero';

export default function WellnessCenters() {
  return (
    <>
      <PageHero 
        title="Wellness Centers Medical Director Services"
        backgroundImage="https://images.pexels.com/photos/4325764/pexels-photo-4325764.jpeg"
      />
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Comprehensive Wellness Center Support</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD offers expert medical director services for wellness centers, 
                providing holistic medical oversight and strategic guidance.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Holistic health program development</li>
                <li>• Integrative medicine oversight</li>
                <li>• Comprehensive wellness protocols</li>
                <li>• Staff training and education</li>
                <li>• Regulatory compliance management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4325764/pexels-photo-4325764.jpeg"
                alt="Wellness Center Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
