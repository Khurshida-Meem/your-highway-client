import { Card, CardContent, Container, Grid } from '@mui/material';
import React from 'react';


const PlacesBlogs = () => {
    return (
        <Container className='mt-5'>
            <Grid container spacing={2}>
                <Grid item sx={8}>
                    <Card>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={4}>
                    <Card>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
};

export default PlacesBlogs;