import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Technology Lead',
      image: 'https://media.istockphoto.com/id/613557584/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=hkCg5CrmTKOApePbPOyo1U9GexEfIJOJqoLXJIvcN8E=', // Add actual image URL
      quote: 'Passionate about technology and travel.',
      bio: 'With over 10 years of experience in software development, Rajesh leads our tech initiatives to enhance the travel experience.',
    },
    {
      name: 'Anita Desai',
      role: 'User Experience Designer',
      image: 'https://www.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India.jpg', // Add actual image URL
      quote: 'Designing for users is my passion.',
      bio: 'Anita specializes in creating user-friendly interfaces that simplify interactions and enhance accessibility.',
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Manager',
      image: 'https://english.cdn.zeenews.com/sites/default/files/2017/11/17/639329-indian-men.jpg', // Add actual image URL
      quote: 'Optimizing processes for better efficiency.',
      bio: 'Vikram ensures that our operations run smoothly, focusing on delivering top-notch services to travelers.',
    },
    {
        name: 'Rekha Sharma',
        role: 'UX/UI Designer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJv1aDBUeruN6ZJwt5VqNHQx1UfUM8wShdEjGRAvW1lQxCAMG4cTgUX_ekZXDKHbAg8wQ&usqp=CAU',
        quote: 'Creating user-centric designs.',
        bio: 'Rekha ensures our interfaces are not only beautiful but also intuitive for users.'
      },
      {
        name: 'Suresh Mehta',
        role: 'Customer Support Lead',
        image: 'https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp',
        quote: 'Ensuring a smooth journey for every passenger.',
        bio: 'Suresh leads our customer support team, dedicated to resolving queries efficiently.'
      },
    // Add more team member objects as needed
];

// Duplicate the first and last members for infinite scroll effect
const infiniteTeamMembers = teamMembers;

const TeamCard = ({ member }) => (
  <div className="rounded-lg hover:shadow-xl p-4 flex flex-col justify-between h-full transition-shadow duration-300 transform hover:scale-105 shadow-[0_2px_10px_rgba(0,0,0,0.3)] bg-white">
    <div>
      <div className="flex items-center mb-4">
        <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full border-2 mr-4 object-cover" />
        <div>
          <h3 className="text-left font-semibold text-lg text-gray-800">{member.name}</h3>
          <p className="text-sm text-blue-600">{member.role}</p>
        </div>
      </div>
      <p className="text-l font-bold mb-2 text-gray-800">"{member.quote}"</p>
      <p className="mb-4 text-gray-600">{member.bio}</p>
    </div>
  </div>
);

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real member
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 641px)' });

  const teamWidth = isSmallScreen ? 100 : 100 / 3;

  const nextMember = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === infiniteTeamMembers.length - 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(1);
        }, 500);
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }, []);

  const prevMember = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(infiniteTeamMembers.length - 2);
        }, 500);
        return prevIndex;
      }
      return prevIndex - 1;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(nextMember, 4000);
    return () => clearInterval(timer);
  }, [nextMember]);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700">
          Our diverse team of professionals is driven by a passion for innovation. With expertise
          spanning technology, transportation, and user experience design, we are dedicated to
          making railway stations smarter, more efficient, and more enjoyable for every passenger.
        </p>
        <div className="relative mt-5">
          <div className="overflow-visible">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!isTransitioning ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${(currentIndex - 1) * teamWidth}%)`,
              }}
            >
              {infiniteTeamMembers.map((member, index) => (
                <div key={index} className={`w-full ${isSmallScreen ? 'flex-shrink-0' : 'sm:w-1/3 flex-shrink-0'} px-2`}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevMember}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 hover:shadow-lg ml-1 bg-white hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextMember}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 hover:shadow-lg mr-1 bg-white hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {infiniteTeamMembers
            .slice(1, isLargeScreen ? infiniteTeamMembers.length-1 : infiniteTeamMembers.length)
            .map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index + 1)}
                className={`w-2 h-2 mx-1 rounded-full cursor-pointer transition-colors duration-200 ${index + 1 === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
