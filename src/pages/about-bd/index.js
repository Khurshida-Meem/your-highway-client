import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import bg from "../../assets/about-bd.webp";
import war from "../../assets/war.jpg";
import weather from "../../assets/Weather-Of-Bangladesh.jpg";
import { BannerBg } from "../../styled.components";
import { Card, CardContent, Container } from "@mui/material";
import { content, weatherBD } from "./content";

let key = 0;

const AboutBd = () => {
  return (
    <div>
      <Navbar />
      <BannerBg background={`${bg}`}>
        <div className="banner-inset ">
          <Container sx={{ pt: 10 }}>
            <h1 className="display-3 text-white">About Bangladesh</h1>
            <h1 className="h3 text-white">
              Know History and Weather of Bangladesh
            </h1>
          </Container>
        </div>
      </BannerBg>
      <Container className="mt-5">
        <Card>
          <CardContent>
            <h1 className="text-center ">History of Bangladesh</h1>
            <div className="text-center">
              <img className="w-50" src={war} alt="" />
            </div>
            <div>
              {content.map((data) => (
                <p key={key++} className="h6 text-black mt-3">
                  {data}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent>
            <h1 className="text-center ">Weather of Bangladesh</h1>
            <div className="text-center">
              <img className="w-50" src={weather} alt="" />
            </div>
            <p className="text-black h6 mt-4">
              Bangladesh has a subtropical monsoon climate with annual heavy
              rainfall. Fortunately, there are six seasons in Bangladesh
              including the summer, the rainy season, autumn, late autumn,
              winter, and spring. Each season stays approximately two months and
              has its own beauty and behavior on the environment. In general,
              the temperature decreases as low as 3°C in the winter and it
              increases to 40°C during the summer.
            </p>
            <p className="text-black h6 mt-3">
              In the summer, the days are longer than the nights. This two month
              of summer (Baishakh and Jaistha) is the warmest season in
              Bangladesh. The negative side of the summer is – it brings the
              natural disasters including Cyclones and Tornados. The winter is
              very enjoying as it stays nearly 10ºC. Bangladesh observes this
              season as like celebrating the festival except for the helpless
              people without proper cloth. In general, the winter is the best
              season to visit Bangladesh.
            </p>
            <div>
              {weatherBD.map((data) => (
                <div key={key++}>
                  <h5 className="mt-4">{data.name}</h5>
                  <p className="h6 text-black">{data.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutBd;
