import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import img from '../../assets/about-banner.jpeg'
import { BannerBg } from '../../styled.components';
import { Container } from '@mui/material';
import './about.css';

const AboutUs = () => {
    return (
      <div>
        <Navbar />
        <div className="about-bg">
          <div className="banner-about-inset flex justify-content-center align-items-center">
            <Container sx={{ pt: 10 }}>
              <h1 className="display-3 text-white">About Us</h1>
              <h1 className="display-6 text-white">Learn more about us</h1>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default AboutUs;