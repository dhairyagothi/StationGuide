import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Stats.css';

const Stats = () => {
    const [viewed, setViewed] = useState({
        stationsCovered: false,
        activeUsers: false,
        totalBookings: false,
        feedbackRatings: false,
    });

    return (
        <div className='stats-section'>
            <StatItem title="Stations Covered" end={200} viewed={viewed.stationsCovered} setViewed={() => setViewed(prev => ({ ...prev, stationsCovered: true }))} />
            <StatItem title="Active Users" end={1500} viewed={viewed.activeUsers} setViewed={() => setViewed(prev => ({ ...prev, activeUsers: true }))} />
            <StatItem title="Total Bookings" end={5000} viewed={viewed.totalBookings} setViewed={() => setViewed(prev => setViewed(prev => ({ ...prev, totalBookings: true })))} />
            <StatItem title="Feedback Ratings" end={4.8} viewed={viewed.feedbackRatings} setViewed={() => setViewed(prev => ({ ...prev, feedbackRatings: true }))} />
        </div>
    );
};

const StatItem = ({ title, end, viewed, setViewed }) => (
    <div className='stat-item'>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={isVisible => isVisible && setViewed()}>
            {({ isVisible }) => (
                <div className='stat-number'>
                    {viewed || isVisible ? (
                        // Use CountUp with a formatted decimal display
                        <CountUp 
                            start={0} 
                            end={typeof end === 'number' && end % 1 !== 0 ? end : Math.floor(end)} 
                            duration={3} 
                            decimals={typeof end === 'number' && end % 1 !== 0 ? 1 : 0} 
                            suffix={typeof end === 'number' && end % 1 !== 0 ? "" : "+"} 
                        />
                    ) : (
                        end
                    )}
                </div>
            )}
        </VisibilitySensor>
        <div className='stat-title '>{title}</div>
    </div>
);

export default Stats;
