import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import Intro from './intro';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
        </div>
    );
};

export default Home;