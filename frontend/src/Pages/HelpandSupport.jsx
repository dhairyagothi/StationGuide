import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';



const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const EmergencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

const HelpAndSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const contactInfo = [
    { type: 'phone', value: '+91 1800 123 4567', icon: PhoneIcon },
    { type: 'phone', value: '+91 9876 543 210', icon: PhoneIcon },
    { type: 'email', value: 'support@stationsaarthi.com', icon: MailIcon },
    { type: 'email', value: 'info@stationsaarthi.com', icon: MailIcon },
  ];

  const emergencyServices = [
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
    },
    {
      title: "Railway Protection Force",
      number: "182",
      description: "For security-related issues at railway stations"
    }
  ];

  const basicQuestions = [
    {
      question: "What is StationSaarthi?",
      answer: "StationSaarthi is a platform designed to enhance your Indian Railway Station experience, providing features like live train updates, navigation, and personalized recommendations."
    },
    {
      question: "How does StationSaarthi work?",
      answer: "Simply download the StationSaarthi app or visit our website to access our services. You can use our platform to get real-time train information, navigate within stations, find amenities, and more."
    },
    {
      question: "Is StationSaarthi free to use?",
      answer: "Yes, StationSaarthi is a free platform. You can use all of our features without any subscription fees."
    },
    {
      question: "How can I check the arrival and departure times of my train?",
      answer: "You can easily check your train's arrival and departure times by entering its number or name on our platform."
    },
    {
      question: "Can I track the real-time location of my train?",
      answer: "Yes, StationSaarthi provides real-time train tracking. You can see the exact location of your train on a map."
    }
  ];

  const filteredBasicQuestions = basicQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };
  const navigate = useNavigate();


  const HomeClick = () => {   
          navigate('/'); // Navigates to the home page
      };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
       <button onClick={HomeClick} className='absolute left-0 top-2'>
                <img src={backicon} alt="" className='h-[5vh]' />
            </button>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Help and Support</h1>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4">
                    <info.icon />
                    <span className="text-gray-700">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-4 top-4">
                  <SearchIcon />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Basic Questions</h2>
              {filteredBasicQuestions.map((q, index) => (
                <div key={index} className="mb-4 bg-white rounded-lg shadow-md">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{q.question}</h3>
                    {expandedQuestion === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {expandedQuestion === index && (
                    <div className="p-4 border-t">
                      <p className="text-gray-700">{q.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Services Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-red-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">Emergency Services</h2>
              {emergencyServices.map((service, index) => (
                <EmergencyServiceCard
                  key={index}
                  title={service.title}
                  number={service.number}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
