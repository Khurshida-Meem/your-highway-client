import { Card, Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { BannerBg } from "../../styled.components";
import Header from "../home/shared/header";
import { hotels } from "./db";

const SingleHotel = () => {
  const { hotelId } = useParams();

  const hotelArr = hotels.filter((data) => data.id === parseInt(hotelId));
  const hotel = hotelArr[0];

  return (
    <div>
      <Navbar />
      <BannerBg background={`${hotel?.img}`}>
        <div className="banner-inset ">
          <Container sx={{ pt: 10 }}>
            <h1 className="display-3 text-white">{hotel?.hotel_name}</h1>
            <h1 className="display-6 text-white">{hotel?.place}</h1>
          </Container>
        </div>
      </BannerBg>
      <Container className="mt-3" spacing={2}>
        <Grid container>
          <Grid xs={12} sm={6} md={4} item>
            <Header title="Available Rooms" />
            <hr />
          </Grid>
          <Grid xs={12} sm={6} md={8} item>
            <Grid container>
              {hotel.available_rooms.map((data) => (
                <Grid item>
                  <Card></Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {hotel.available_rooms.map((data) => (
            <Grid item>
              <Card></Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default SingleHotel;
