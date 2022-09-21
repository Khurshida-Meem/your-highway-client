import { Box, Grid } from '@mui/material';
import React from 'react';

const UserHome = () => {
    return (
      <Box>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} item>
            <div className="card text-white dark-bg mb-3">
              <h2 className="text-white ps-3 pt-2">Total Packages</h2>
              <hr />
              <div className="px-3 pb-3">
                <h3 className="card-text text-white">
                  3
                </h3>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <div className="card text-white red-bg mb-3">
              <h2 className="text-white ps-3 pt-2">Total Tours</h2>
              <hr />
              <div className="px-3 pb-3">
                <h3 className="card-text text-white">
                  5
                </h3>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <div className="card text-white green-bg mb-3">
              <h2 className="text-white ps-3 pt-2">Total Spendings</h2>
              <hr />
              <div className="px-3 pb-3">
                <h3 className="card-text text-white">
                  BDT 20,000
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    );
};

export default UserHome;