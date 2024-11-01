import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaTrain, FaGlobe, FaTicketAlt } from 'react-icons/fa';
import { IoMdMegaphone } from 'react-icons/io';
import backicon from "../assets/svg/backicon.svg";

const NotificationPage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Notifications'; 
  }, []);

  const navigate = useNavigate();

  const HomeClick = () => {
    navigate("/");
  };

  const notifications = [
    {
      id: 1,
      icon: <IoMdMegaphone />,
      message: "Your Train will reach Bhopal Jn. In 5 minutes",
      time: "Now",
      date: "Today"
    },
    {
      id: 2,
      icon: <FaTrain />,
      message: "Your train 214562 Platform is changed",
      time: "5 min",
      date: "Today"
    },
    {
      id: 3,
      icon: <IoMdMegaphone />,
      message: "Use Get direction to get navigation to your coach in Vande Bharat",
      time: "2 Sep",
      date: "Yesterday"
    },
    {
      id: 4,
      icon: <FaTicketAlt />,
      message: "Weel chair Booked successful.",
      time: "2 Sep",
      date: "Yesterday"
    },
    {
      id: 5,
      icon: <FaGlobe />,
      message: "Visit our website today. www.stationsaarthi.gov.in",
      time: "2 Sep",
      date: "Yesterday"
    },
    {
      id: 6,
      icon: <FaTicketAlt />,
      message: "Cloak room Booked successful.",
      time: "2 Sep",
      date: "Yesterday"
    }
  ];

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {});

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="mb-6">
        <button onClick={HomeClick} className="fixed left-4 top-4">
          <img src={backicon} alt="Back" className="h-8 w-auto" />
        </button>
        <h1 className="text-2xl font-bold text-center text-gray-800">Notifications</h1>
      </div>

      <div className="max-w-md mx-auto">
        {Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
          <div key={date} className="mb-6">
            <h2 className="mb-3 text-lg font-semibold text-gray-700">{date}</h2>
            {dateNotifications.map((notification) => (
              <div key={notification.id} className="flex items-center p-4 mb-3 bg-white rounded-lg shadow">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-blue-500 bg-blue-100 rounded-full">
                  {notification.icon}
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-800">{notification.message}</p>
                </div>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
