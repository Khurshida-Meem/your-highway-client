import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import img from '../../../assets/offer.png';
import Header from '../shared/header';
import OfferedPlaces from './offered-places';
import './offered.scss';



const hotels = [
    {
        hotel_name: 'Kantua hotel',
        country: 'France',
        place: 'Disney land, Paris',
        room_services: [
            {
                service_name: ''
            }
        ]
    }
]


const OfferedServices = () => {
    return (
      <Container sx={{ mt: 20 }}>
        <Grid container>
          <Grid
            className="mt-3"
            sx={{ display: { xs: "none", md: "block" } }}
            item
            sm={4}
          >
            <Box className="w-100 radius-7">
              <img className="img-fluid rounded-card" src={img} alt="" />
            </Box>
            <Box
              sx={{ mt: "-300px", display: "flex", justifyContent: "center" }}
            >
              <Box className="text-bg px-5 py-4 radius-7">
                <h3 className="text-white">Up to</h3>
                <div className="d-flex align-items-center">
                  <h1 className="display-1 me-2 text-white">50</h1>
                  <h4 className="text-white">
                    % <br />
                    Off{" "}
                  </h4>
                </div>
                <h3 className="text-white">Holiday</h3>
                <h3 className="text-white">Packages</h3>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Container>
              <Header title={"Top Rated Destinations"} />
              <OfferedPlaces />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
};

export default OfferedServices;