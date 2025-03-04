import React from 'react';
import { FaBook, FaQuoteLeft, FaHandshake, FaUserMd } from 'react-icons/fa';

export default function HiringProcessSection() {
  const steps = [
    {
      icon: <FaBook className="text-3xl text-secondary" />,
      number: "1",
      title: "Schedule Meeting",
      description: "Call us or fill out our form to schedule a quick consultation."
    },
    {
      icon: <FaQuoteLeft className="text-3xl text-secondary" />,
      number: "2",
      title: "Get a Quote",
      description: "We provide an individualized quote for your clinic during the meeting"
    },
    {
      icon: <FaHandshake className="text-3xl text-secondary" />,
      number: "3",
      title: "Accept the Quote",
      description: "Confirm the quote works for you, and you choose your start date."
    },
    {
      icon: <FaUserMd className="text-3xl text-secondary" />,
      number: "4",
      title: "Hire Medical Director",
      description: "We place you with a qualified medical director, and we handle the paperwork."
    }
  ];

  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c252cb1831d32b51494ff9.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.15'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Hiring a <span className="text-secondary">Medical Director</span> is Easy and Fast
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-accent-sage/50 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:bg-accent-sage/70"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">
                {step.number}. {step.title}
              </div>
              <p className="text-primary-dark">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
