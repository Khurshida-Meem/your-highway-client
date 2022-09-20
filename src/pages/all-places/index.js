import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import fetchPlaces from "../../redux/places/thunk/fetch-places";
import Header from "../home/shared/header";
import Place from "../home/shared/place";
import Search from "./search";

const Places = () => {
  const dispatch = useDispatch();
  const placesState = useSelector((state) => state.places);

  const { places, searchKey } = placesState;

  useEffect(() => {
    dispatch(fetchPlaces);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="places-banner">
        <div className="places-banner-inset ">
          <Container sx={{ pt: 10 }}>
            <p className="text-white h5">CHOOSE YOUR DESTINATION</p>
            <h1 className="text-white display-2">Our Served Destinations</h1>
          </Container>
        </div>
      </div>
      <Container>
        <Box>
          <Search />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {places
              ?.filter((data) => {
                if (searchKey !== null) {
                  return (
                    data?.destination
                      .toLowerCase()
                      .includes(searchKey.toLowerCase()) ||
                    data?.country
                      .toLowerCase()
                      .includes(searchKey.toLowerCase())
                  );
                }
                return true;
              })
              ?.map((data) => (
                <Grid xs={12} sm={6} md={4} item key={data?._id}>
                  <Place data={data} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Places;
