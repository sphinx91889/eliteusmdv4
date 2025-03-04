import React, { useState } from 'react'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: "Are there upfront fees?",
      answer: "There are no upfront fees for EliteUSMD. When hiring a medical director with our company, the only fee you pay is a monthly standard medical director fee. We help you hire a collaborating physician and the only fee you pay is the monthly fee for supervision."
    },
    {
      question: "What is the main role of a medical director?",
      answer: "A medical director provides medical oversight, ensures regulatory compliance, develops clinical protocols, and supervises medical staff to maintain the highest standards of patient care and safety."
    },
    {
      question: "How much are the fees?",
      answer: "Our standard medical director fees start at $. The exact fee can vary depending on the specific requirements of your practice and the complexity of medical oversight needed."
    },
    {
      question: "Does the medical director need to have an MD or DO?",
      answer: "Typically, a medical director should be a licensed physician (MD or DO) with relevant experience in the specific type of medical practice you are operating."
    },
    {
      question: "Do medical directors have to be licensed in the state where they provide oversight?",
      answer: "Yes, medical directors must be licensed in the state where they are providing medical oversight. We ensure all our medical directors meet state-specific licensing requirements."
    },
    {
      question: "How quickly can I start with a medical director?",
      answer: "Our process is designed to be fast and efficient. Once you complete the initial consultation and agree to terms, we can typically place a medical director within 2-4 weeks."
    },
    {
      question: "I'm a RN, NP, or PA. Can I hire a medical director and start a practice?",
      answer: "Yes, many RNs, NPs, and PAs work with medical directors to establish and operate medical practices. We specialize in helping medical professionals like you find the right medical director."
    },
    {
      question: "I am not a medical professional. Can I hire a Medical Director?",
      answer: "While our primary focus is on supporting medical professionals, we can also assist non-medical entrepreneurs in establishing medical practices by connecting them with qualified medical directors."
    },
    {
      question: "Is there a termination fee?",
      answer: "We offer flexible terms with no long-term contracts. If you need to terminate our services, there are no additional fees beyond the current month's service."
    }
  ]

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(index)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-primary-dark font-semibold">{faq.question}</span>
                <span className="text-secondary">
                  {openQuestion === index ? '−' : '+'}
                </span>
              </button>
              
              {openQuestion === index && (
                <div className="pb-4 text-primary-dark">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
