import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import CountryFiltered from './country-based';
import Intro from './intro';
import OfferedServices from './offered';
import Reviews from './review';
import VideoSection from './video';
import WhyChoose from './why-choose';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
            <WhyChoose />
            <OfferedServices />
            <CountryFiltered />
            <VideoSection />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;