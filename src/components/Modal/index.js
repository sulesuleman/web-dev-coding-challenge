import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ image_url = "", name = "", facebook_page_url = "", gotoArtistDetailPage, popupRef }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="expanded-card-overlay"
        >
            <div ref={popupRef} className="expanded-card">
                <img src={image_url} className="expanded-card-image" alt={name} />
                <div className="content">
                    <h1>{name}</h1>
                    <h2>{facebook_page_url}</h2>
                    <button onClick={gotoArtistDetailPage} className="btn-grad">
                        See Events
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Modal;
