import { Box, Card, Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { BannerBg } from "../../styled.components";
import Header from "../home/shared/header";
import AvailableRooms from "./available-rooms";
import { hotels } from "./db";
import HotelFeatures from "./hotel-features";

let key = 0;

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
      <Container className="mt-3" spacing={1}>
        {/* ======== Rooms Info ================ */}
        <Box>
          <Header title="Available Rooms" />
          <hr />
          <Grid xs={12} sm={6} md={8} item>
            <Grid container spacing={2}>
              {hotel.available_rooms.map((data) => (
                <Grid item key={key++} xs={12} sm={6} md={4}>
                  <AvailableRooms room={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        {/* ============== Features ============ */}
        <Box>
          <Grid xs={12} sm={6} md={8} item>
            <Grid container spacing={2}>
              {hotel.features.map((data) => (
                <Grid item key={key++} xs={12}>
                  <HotelFeatures data={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default SingleHotel;
