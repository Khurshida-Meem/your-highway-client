import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import CountryFiltered from './country-based';
import Intro from './intro';
import OfferedServices from './offered';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
            <OfferedServices />
            <CountryFiltered />
        </div>
    );
};

export default Home;