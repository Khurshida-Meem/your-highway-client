import { Box, Grid } from '@mui/material';
import React from 'react';
import OrdersYearly from './booking-stat';
import RatingStat from './rating-stat';
import variables from '../../../sass/_variable.module.scss'
import PageVisitor from './page-visitor.tsx'

const DashboardHome = () => {

    return (
        <div>
            <OrdersYearly />
            <Grid sx={{ mt: 10 }} container>
                <Grid item xs={12} sm={8}>
                    <PageVisitor />
                </Grid>
                <Grid sx={{mt: {xs: 10, sm:0}}} item xs={12} sm={4}>
                    <Box sx={{
                        border: `4px solid ${variables.colorDark}`,
                        p: 3,
                        borderRadius: 7
                    }}>
                        <RatingStat />
                    </Box>

                </Grid>
            </Grid>

        </div>

    );
};

export default DashboardHome;