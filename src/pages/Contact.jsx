import React from 'react'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        backgroundImage="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Get in touch with us to learn more about our medical director services and how we can help your aesthetic practice.
          </p>
        </div>
      </section>
      
      <ContactForm />
    </div>
  )
}
