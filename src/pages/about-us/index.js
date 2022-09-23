import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import img from "../../assets/about-banner.jpeg";
import img1 from "../../assets/about-1.jpeg";
import img2 from "../../assets/about-2.jpeg";
import { BannerBg } from "../../styled.components";
import { Container, Grid } from "@mui/material";
import "./about.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <BannerBg background={`${img}`}>
        <div className="banner-inset flex justify-content-center align-items-center">
          <Container sx={{ pt: 10 }}>
            <h1 className="display-3 text-white">About Us</h1>
            <h1 className="h5 text-white">Learn more about us</h1>
          </Container>
        </div>
      </BannerBg>

      <Grid container>
        <Grid xs={12} sm={6} item>
          <img className="img-fluid" src={img1} alt="" />
        </Grid>
        <Grid className="m-auto px-5" xs={12} sm={6} item>
          <div>
            <h1 className="display-5">Our Story</h1>
            <p className="letter-spacing-3 mb-4">
              INSPIRED & PASSIONATE TRAVELERS
            </p>
            <p className="text-dark">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack, elit bespoke vinyl art party Pitchfork selfies master
              cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
              pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="m-auto px-5" xs={12} sm={6} item>
          <div>
            <h1 className="display-5">Our Values</h1>
            <p className="letter-spacing-3 mb-4">JOURNEYS WORTH TAKING</p>
            <p className="text-dark">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack, elit bespoke vinyl art party Pitchfork selfies master
              cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
              pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.
            </p>
          </div>
        </Grid>
        <Grid xs={12} sm={6} item>
          <img className="img-fluid" src={img2} alt="" />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default AboutUs;
