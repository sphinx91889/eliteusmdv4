import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function Resources() {
  const resourceSections = [
    { 
      title: "The Role of a Medical Director for Modern Healthcare", 
      path: "/resources/medical-director-role",
      description: "Explore the critical responsibilities and strategic importance of medical directors in modern healthcare settings.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-1.jpg"
    },
    { 
      title: "The Future of Medical Directorship", 
      path: "/resources/medical-directorship-future",
      description: "Insights into emerging trends, technological advancements, and evolving roles in medical leadership.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-2.jpg"
    },
    { 
      title: "How to Become a Medical Director", 
      path: "/resources/becoming-medical-director",
      description: "Comprehensive guide to career paths, qualifications, and strategies for aspiring medical directors.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-3.jpg"
    },
    { 
      title: "Challenges Faced in Medical Direction", 
      path: "/resources/medical-direction-challenges",
      description: "Addressing complex issues in medical leadership, compliance, and organizational management.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-4.jpg"
    },
    { 
      title: "Why Medical Directors Are Vital", 
      path: "/resources/medical-directors-importance",
      description: "Understanding the pivotal role medical directors play in ensuring quality care and operational excellence.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-5.jpg"
    },
    { 
      title: "Key Responsibilities of a Medical Director", 
      path: "/resources/medical-director-responsibilities",
      description: "Detailed overview of core duties, strategic planning, and leadership expectations for medical directors.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-6.jpg"
    }
  ];

  return (
    <div>
      <PageHero 
        title="Resources for Medical Directors"
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/medical-director-1.jpg"
      />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive insights, guidance, and professional development resources for medical directors navigating the complex healthcare landscape.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resourceSections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path} 
                className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={section.imageUrl} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-primary-dark mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="text-secondary font-medium">Learn More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
