import React from 'react'
import PageHero from '../../components/PageHero'

export default function ChartReview() {
  return (
    <div>
      <PageHero 
        title="Chart Review And Patient Assessment" 
        backgroundImage="/images/chart-review.jpg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Thorough review of patient charts and comprehensive assessments to ensure proper documentation and care standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
