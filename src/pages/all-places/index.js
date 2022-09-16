import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Container>
        <Box className="d-flex justify-content-center">
          <Search />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Box sx={{ mb: 5 }}>
            <Header title={"Our Served Places"} />
          </Box>
          <Grid container>
            {places
            ?.filter(data => {
              if (searchKey !== null) {
                return (
                  data?.destination
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  data?.country.toLowerCase().includes(searchKey.toLowerCase())
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
    </div>
  );
};

export default Places;
