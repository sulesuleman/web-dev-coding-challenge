import React from "react";
import { isEmpty } from "lodash";
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { Card } from "components";
import { UseFetchArtists } from "hooks";

const ContentSection = () => {
    const { singer, search, popup, gotoArtistDetailPage, togglePopup } = UseFetchArtists();


    return (
        <section className="content-container">
            {
                isEmpty(singer) ?
                    <p className="status">0 Results found for "{search}" </p>
                    :
                    <AnimateSharedLayout type='crossfade'>
                        <p className="status">1 Result found for "{search}" </p>
                        <motion.span layoutId={singer?.id} onClick={togglePopup}>
                            <Card
                                picture={singer?.image_url}
                                name={singer?.name}
                                page_url={singer?.facebook_page_url}
                            />
                        </motion.span>

                        <AnimatePresence>
                            {popup && (
                                <motion.div className="expanded-card-overlay">
                                    <motion.div layoutId={singer?.id} className="expanded-card">
                                        <motion.div className="expanded-card-section ">
                                            <motion.img src={singer?.image_url} className="expanded-card-image" />
                                            <motion.div className="content" >
                                                <motion.h1>{singer?.name}</motion.h1>
                                                <motion.h2>{singer?.facebook_page_url}</motion.h2>
                                                <motion.button onClick={gotoArtistDetailPage} className="btn-grad">See Events</motion.button>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </AnimateSharedLayout>
            }

        </section>
    );
};

export default ContentSection;
