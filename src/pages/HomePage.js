import React from 'react';
import { Button, Searchbar } from 'components';
import { UseFetchHome } from 'hooks';

const Home = () => {

    const { handleSubmit } = UseFetchHome();

    return (
        <main className="container">
            <div className='section-overlay'>
                <form onSubmit={handleSubmit} className="form-section">
                    <p>Bands In Town</p>
                    <Searchbar />
                    <Button styles={'btn-grad'}>Search</Button>
                </form>
            </div>
        </main>
    );
};

export default Home;
