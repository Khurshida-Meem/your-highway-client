import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import CountryFiltered from './country-based';
import Intro from './intro';
import OfferedServices from './offered';
import Reviews from './review';
import VideoSection from './video';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
            <OfferedServices />
            <CountryFiltered />
            <VideoSection />
            <Reviews />
        </div>
    );
};

export default Home;