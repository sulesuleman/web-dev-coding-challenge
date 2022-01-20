import React from 'react';
import { Searchbar } from 'components';


const ArtistListPage = () => {
    return (
        <main className="artist-container">
            <section className="hero-section">
                <div className="leftsection">
                    <div className="content">
                        <h1>Bands In Town</h1>
                        <p>Search your favourite artists now abd get Live updates on their upcoming events</p>
                        <Searchbar />
                    </div>
                </div>
                <div className="rightsection">
                </div>
            </section>
            <section className="content-section">

            </section>

        </main>
    );
};

export default ArtistListPage;
