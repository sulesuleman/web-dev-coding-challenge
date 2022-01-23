import React from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
const EventCard = ({ name = '', city = '', country = '', datetime = '' }) => {
    return (
        <motion.div variants={item} className="event-card-container">
            <p className="header">EVENT DETAILS</p>
            <div className="content">
                <div className="row">
                    <div className="col">
                        <p className="heading">Country</p>
                        <p className='subheading'>{country}</p>
                    </div>
                    <div className="col">
                        <p className="heading">City</p>
                        <p className='subheading'>{city}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="heading">Venue</p>
                        <p className="subheading">{name}</p>
                    </div>
                    <div className="col">
                        <p className="heading">Date</p>
                        <p className="subheading">{moment(datetime).format('MMMM Do YYYY')}</p>
                    </div>
                </div>
            </div>


        </motion.div>
    );
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

export default EventCard;
