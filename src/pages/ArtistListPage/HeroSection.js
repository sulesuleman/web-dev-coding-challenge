import { Button, Searchbar } from 'components';
import { useSearchContext } from 'context';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
    const { _HandleSearchSubmit } = useSearchContext();

    return (
        <section className="hero-section">
            <form onSubmit={_HandleSearchSubmit} className='leftsection'>
                <div className="content">
                    <motion.h1 initial={{ x: -400 }} animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}>
                        Bands In Town
                    </motion.h1>
                    <p>Search your favourite artists now and get Live updates on their upcoming events</p>
                    <Searchbar />
                    <div>
                        <Button styles={'btn-grad'}>
                            Search
                        </Button>
                    </div>
                </div>
            </form>
            {/* <div className="rightsection">
            </div> */}
        </section>);
};

export default HeroSection;
