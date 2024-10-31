import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import backicon from '../assets/svg/backicon.svg'; 
import './faq.css';

const Faq = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I book a station guide service?",
      answer: "To book a station guide service, navigate to the 'Booking' page, select the service you need, and follow the steps to confirm your booking.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods, including credit/debit cards, UPI, and popular digital wallets.",
    },
    {
      question: "How can I cancel or modify my booking?",
      answer: "You can cancel or modify your booking from your account under 'My Bookings'. Select the booking and choose the desired option.",
    },
    {
      question: "Is there a way to contact support?",
      answer: "Yes, you can contact our support team via the 'Help and Support' page, where we offer chat and email options for assistance.",
    },
    {
      question: "Are there any discounts available?",
      answer: "Check our 'Offers' section regularly for seasonal discounts and promotional codes.",
    },
    {
      question: "What are the operating hours of the station guide service?",
      answer: "Our station guide service operates 24/7 to assist you at any time.",
    },
    {
      question: "Can I provide feedback about the service?",
      answer: "Absolutely! We welcome feedback through the 'Feedback' section on our website.",
    },
    {
      question: "What should I do if I lose my booking confirmation?",
      answer: "If you lose your booking confirmation, you can retrieve it from your account or contact customer support for assistance.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const HomeClick = () => {   
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="faq-section">
      <button onClick={HomeClick} className='absolute left-0 top-2'>
        <img src={backicon} alt="Back" className='h-[5vh]' />
      </button>
      <h2 className="faq-main-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className="faq-question">
              {item.question}
              <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
