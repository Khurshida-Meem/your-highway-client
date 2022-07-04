import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import Intro from './intro';
import OfferedServices from './offered';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
            <OfferedServices />
        </div>
    );
};

export default Home;