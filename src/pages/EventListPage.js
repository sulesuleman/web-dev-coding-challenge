import { Card, EventCard } from 'components';
import { motion } from 'framer-motion';
import { UseFetchEvents } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventListPage = () => {

    const { singer, artistEvents } = UseFetchEvents();
    const navigate = useNavigate()
    return (
        <div className="event-screen">
            <span className="navigation-wrapper">
                <p onClick={() => navigate(-1)} className="navigation">{'<'} Back to results </p>
            </span>
            <section className="first-section">
                <Card
                    picture={singer?.image_url}
                    name={singer?.name}
                    page_url={singer?.facebook_page_url}
                />
            </section>
            <section className='events-section'>
                <p className="status">{artistEvents.length} Upcoming Events</p>
                <motion.div initial={'hidden'} animate={artistEvents.length > 0 && 'visible'} variants={container} className="events-card-section">
                    {
                        artistEvents && artistEvents.map(({ datetime, venue }, index) => (
                            <EventCard key={index} {...venue} datetime={datetime} />
                        ))
                    }
                </motion.div>
            </section>
        </div>

    );
};

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}


export default EventListPage;
