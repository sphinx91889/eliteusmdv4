import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CTASection'
import PricingSection from '../components/PricingSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import HiringProcessSection from '../components/HiringProcessSection'
import FAQSection from '../components/FAQSection'
import FeaturedClinicSection from '../components/FeaturedClinicSection'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <CTASection />
      <PricingSection />
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection />
      <FeaturedClinicSection />
      <ContactForm />
    </div>
  )
}
