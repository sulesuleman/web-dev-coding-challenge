import { Button, Searchbar } from 'components';
import { useSearchContext } from 'context';
import React from 'react';

const HeroSection = () => {
    const { _HandleSearchSubmit } = useSearchContext();

    return (
        <section className="hero-section">
            <form onSubmit={_HandleSearchSubmit} className='leftsection'>
                <div className="content">
                    <h1>Bands In Town</h1>
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
