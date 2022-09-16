import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import fetchPlaces from '../../redux/places/thunk/fetch-places';
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
            {/* <CountryFiltered /> */}
            <VideoSection />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;