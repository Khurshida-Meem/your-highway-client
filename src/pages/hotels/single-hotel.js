import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { THUNK_SERVER } from "../../redux/server";
import { BannerBg } from "../../styled.components";
import Header from "../home/shared/header";
import AvailableRooms from "./available-rooms";
import BookingDialog from "./booking-dialog";
import HotelFeatures from "./hotel-features";
import Meals from "./meals";

let key = 0;

const SingleHotel = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({})
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(THUNK_SERVER + "hotels/" + hotelId)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelId]);


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
          <Grid xs={12} sm={6} md={8} item>
            <Grid container spacing={2}>
              {hotel?.available_rooms?.map((data) => (
                <Grid item key={key++} xs={12} sm={6} md={4}>
                  <AvailableRooms room={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        {/* ============== Features ============ */}
        <Box className="mt-5">
          <Header title="Available Features" />
          <Grid xs={12} sm={6} md={8} item>
            <Grid container spacing={2}>
              {hotel?.features?.map((data) => (
                <Grid item key={key++} xs={12}>
                  <HotelFeatures data={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        {/* ============== Meals ============ */}
        <Box className="mt-5">
          <Header title="Available Meals" />
          <Meals meals={hotel?.meals} />
        </Box>
        <Box className="mt-5 text-center">
          <button
            onClick={handleClickOpen}
            className="button pink-bg py-2 w-50"
          >
            Request a Booking
          </button>
        </Box>
      </Container>
      <BookingDialog
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        hotel={hotel}
      />
      <Footer />
    </div>
  );
};

export default SingleHotel;
