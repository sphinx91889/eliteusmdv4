import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: "Professional Medical Supervision",
    description: "Comprehensive oversight and guidance for aesthetic practices",
    imageUrl: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/medical-supervision"
  },
  {
    title: "Medical Director",
    description: "Expert medical leadership and compliance management",
    imageUrl: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/medical-director"
  },
  {
    title: "Chart Review And Patient Assessment",
    description: "Thorough review of patient documentation and treatment protocols",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/chart-review"
  }
]

export default function ServicesSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-10 584.5C152.5 467.5 283.5 467 373 499.5C462.5 532 591.5 643.5 733.5 643.5C875.5 643.5 1007 537 1137.5 490C1268 443 1422.5 467 1450 478.5V800H-10V584.5Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
          />
          <path
            d="M1450 478.5C1288.5 361.5 1157.5 361 1068 393.5C978.5 426 849.5 537.5 707.5 537.5C565.5 537.5 434 431 303.5 384C173 337 18.5 361 -9 372.5V800H1450V478.5Z"
            fill="url(#paint1_linear)"
            fillOpacity="0.1"
          />
          <path
            className="feminine-silhouette"
            d="M700 200C700 200 750 250 800 300C850 350 900 400 850 450C800 500 750 550 700 600C650 650 600 700 550 650C500 600 450 550 500 500C550 450 600 400 650 350C700 300 700 200 700 200Z"
            fill="url(#paint2_linear)"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="720"
              y1="467"
              x2="720"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--primary-color)" />
              <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="720"
              y1="361"
              x2="720"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--secondary-color)" />
              <stop offset="1" stopColor="var(--secondary-color)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="700"
              y1="200"
              x2="700"
              y2="700"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--primary-color)" />
              <stop offset="1" stopColor="var(--secondary-color)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 card-title text-primary-dark">
          Our <span className="text-secondary">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                imageUrl={service.imageUrl}
                path={service.path}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
