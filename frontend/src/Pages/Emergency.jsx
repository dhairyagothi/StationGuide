import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmergencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const EmergencyServiceCard = ({ title, number, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <EmergencyIcon />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-xl font-bold text-red-600 mb-1">{number}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyServices = [
    {
      title: "Railway Protection Force",
      number: "182",
      description: "For security-related issues at railway stations"
    },
    {
      title: "Railway Helpline",
      number: "139",
      description: "For general railway inquiries and complaints"
    },
    {
      title: "Police",
      number: "100",
      description: "For immediate police assistance and emergencies"
    },
    {
      title: "Ambulance",
      number: "108",
      description: "For medical emergencies and immediate medical assistance"
    },
    {
      title: "Fire Brigade",
      number: "101",
      description: "For fire-related emergencies and rescue operations"
    },
    {
      title: "Women Helpline",
      number: "1091",
      description: "24/7 women's safety and assistance helpline"
    }
  ];

  const HomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <button onClick={HomeClick} className="absolute top-4 left-4 p-2 flex items-center text-blue-600 hover:text-blue-800">
        <BackIcon />
        <span className="ml-2">Back to Home</span>
      </button>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Emergency Services</h1>
        
        <div className="max-w-3xl mx-auto bg-red-100 rounded-lg p-6 shadow-lg">
          <p className="text-lg text-center mb-6 text-gray-700">
            In case of any emergency at the railway station, please contact the relevant service immediately.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyServices.map((service, index) => (
              <EmergencyServiceCard
                key={index}
                title={service.title}
                number={service.number}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Safety Tips:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 font-semibold">
              <li>Always be aware of your surroundings at the station.</li>
              <li>Keep your belongings close and secure at all times.</li>
              <li>Report any suspicious activities to the Railway Protection Force.</li>
              <li>Follow all safety instructions and signage at the station.</li>
              <li>In case of medical emergency, seek help from the station medical room if available.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Emergency;