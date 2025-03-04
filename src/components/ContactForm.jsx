import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isExistingClient: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const inputClasses = "w-full px-0 py-2 bg-transparent border-0 border-b-2 border-primary/20 focus:border-secondary focus:ring-0 placeholder-gray-500"

  return (
    <section className="py-24 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 card-title text-primary-dark">Enhance Your Practice</h2>
            <h3 className="text-3xl font-semibold mb-8 text-secondary">Let's Chat</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className={inputClasses}
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="E-Mail Address *"
                  className={inputClasses}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject *"
                  className={inputClasses}
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Message *"
                  className={inputClasses}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="existingClient"
                  className="w-4 h-4 border-primary/20 rounded text-secondary focus:ring-secondary"
                  checked={formData.isExistingClient}
                  onChange={(e) => setFormData({...formData, isExistingClient: e.target.checked})}
                />
                <label htmlFor="existingClient" className="ml-2 text-primary-dark">
                  I am an existing client
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded-lg transition-colors"
              >
                Send
              </button>
              
              <p className="text-xs text-primary-dark/70 mt-4">
                By submitting this form you agree to be contacted via phone/text/email. Reply STOP to opt-out of marketing at any time*
              </p>
            </form>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-primary/10"></div>
            <img 
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
              alt="Professional medical consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-accent-sage/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
