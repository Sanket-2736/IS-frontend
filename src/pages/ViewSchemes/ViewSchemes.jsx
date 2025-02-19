import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewSchemes() {
  const navigate = useNavigate();

  const schemes = [
    { name: 'E-Thela Sahaayata Yojana', description: 'Support for street vendors to expand their businesses.' },
    { name: 'Pradhan Mantri Kaushal Vikas Yojana', description: 'Skill development program for youth employment.' },
    { name: 'Gatidhara Scheme', description: 'Financial assistance for unemployed youth to start businesses.' },
    { name: 'Shilpi Samridhi Yojana', description: 'Empowering artisans through financial aid and training.' },
    { name: 'Stand-Up India Scheme', description: 'Promoting entrepreneurship among women and SC/ST communities.' },
    { name: 'MUDRA Loan Scheme', description: 'Providing financial support to micro and small enterprises.' },
    { name: 'Digital India Initiative', description: 'Bridging the digital divide by promoting internet access and literacy.' },
    { name: 'Startup India', description: 'Encouraging innovation and entrepreneurship through financial incentives.' },
    { name: 'Ayushman Bharat Yojana', description: 'Providing health insurance to economically weaker sections.' },
    { name: 'Pradhan Mantri Awas Yojana', description: 'Ensuring affordable housing for all by 2022.' },
    { name: 'PM Garib Kalyan Yojana', description: 'Providing financial relief to poor households during crises.' },
    { name: 'Faster Adoption and Manufacturing of Hybrid and Electric Vehicles (FAME)', description: 'Promoting the adoption of electric vehicles in India.' },
    { name: 'Deendayal Antyodaya Yojana', description: 'Uplifting urban and rural poor through skill training and employment.' },
    { name: 'Atal Pension Yojana', description: 'Encouraging financial security through pension schemes for unorganized sector workers.' },
    { name: 'National Rural Health Mission', description: 'Strengthening healthcare facilities in rural India.' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Available Schemes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schemes.map((scheme, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{scheme.name}</h2>
            <p className="text-gray-700 mb-4">{scheme.description}</p>
            <button 
              onClick={() => navigate(`/apply/${index}`)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSchemes;
