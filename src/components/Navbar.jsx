import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClinicTypesOpen, setIsClinicTypesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Professional Medical Supervision",
      path: "/services/medical-supervision"
    },
    {
      title: "Medical Director",
      path: "/services/medical-director"
    },
    {
      title: "Chart Review And Patient Assessment",
      path: "/services/chart-review"
    },
    {
      title: "Additional Procedure & Technique Training",
      path: "/services/training"
    },
    {
      title: "Medical Oversight",
      path: "/services/medical-oversight"
    },
    {
      title: "Laser/Device Purchase Consultations",
      path: "/services/device-consultations"
    }
  ];

  const clinicTypes = [
    { title: "Medical Spas", path: "/clinic-types/medical-spas" },
    { title: "Aesthetic Clinics", path: "/clinic-types/aesthetic-clinics" },
    { title: "Weight Loss Clinics", path: "/clinic-types/weight-loss" },
    { title: "Wellness Centers", path: "/clinic-types/wellness-centers" }
  ];

  const navClasses = isHomePage
    ? `fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`
    : 'bg-white shadow-lg';

  const linkClasses = isHomePage && !isScrolled
    ? 'hover:text-secondary px-3 py-2 text-white'
    : 'hover:text-secondary px-3 py-2 text-primary-dark';

  const DropdownMenu = ({ items, isOpen, setIsOpen, title }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 100);
      }}
    >
      <button className={`flex items-center ${linkClasses}`}>
        {title} <FaChevronDown className="ml-1" size={12} />
      </button>
      
      <div 
        className={`absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-[-10px]'
        }`}
        style={{ top: 'calc(100% - 5px)' }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div 
          className="absolute w-full h-4 top-[-16px] left-0"
          onMouseEnter={() => setIsOpen(true)}
        />
        
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-4 py-2 text-primary-dark hover:bg-accent-sage hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <Link to="/" className="relative z-50">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
              alt="EliteUSMD Logo"
              className="h-24 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link to="/" className={linkClasses}>Home</Link>
              
              <DropdownMenu 
                items={services}
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
                title="Services"
              />

              <DropdownMenu 
                items={clinicTypes}
                isOpen={isClinicTypesOpen}
                setIsOpen={setIsClinicTypesOpen}
                title="Clinic Types"
              />

              <Link to="/locations" className={linkClasses}>Locations</Link>

              <Link to="/resources" className={linkClasses}>Resources</Link>

              <Link to="/testimonials" className={linkClasses}>Testimonials</Link>
              <Link to="/contact" className={linkClasses}>Contact</Link>
            </div>
            
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Started Today
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isHomePage && !isScrolled ? "text-white" : "text-primary-dark"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-primary-dark hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {[
                { title: 'Services', items: services },
                { title: 'Clinic Types', items: clinicTypes }
              ].map((section, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center py-2 text-primary-dark">
                    <span>{section.title}</span>
                    <FaChevronDown size={12} />
                  </div>
                  <div className="pl-4 space-y-2">
                    {section.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-1 text-sm text-primary-dark hover:text-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link 
                to="/locations" 
                className="block py-2 text-primary-dark hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>

              <Link 
                to="/resources" 
                className="block py-2 text-primary-dark hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>

              <Link 
                to="/testimonials" 
                className="block py-2 text-primary-dark hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              
              <Link 
                to="/contact" 
                className="block py-2 text-primary-dark hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block bg-secondary hover:bg-secondary-dark text-white text-center py-2 rounded-lg transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
