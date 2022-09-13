import { Box, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlacesData } from '../../../redux/places/actions';
import Place from '../shared/place';

let key = 0;
const CountryFiltered = () => {

    const [places, setPlaces] = useState([]);
    

    const dispatch = useDispatch();
    const placesData = useSelector(state => state.places.data);


    const countries = [...new Set(placesData?.map(data => data.country))]

    useEffect(() => {
        dispatch(fetchPlacesData())
    }, [dispatch])


    const initialPlace = placesData.filter(data => data.country === countries[0]);
    const [country, setCountry] = useState('Bangladesh');

    const handleClick = country => {
        setPlaces(placesData.filter(data => data.country === country));
        setCountry(country);
    }

    const currPlace = places.length === 0 ? initialPlace : places;

    return (
        <Container sx={{ mt: 15 }}>
            <h2 className='text-center'>
                <span className='title-style px-3 py-1'>
                    Countries for You
                </span>
            </h2>
            <Box className='mt-4 text-center'>
                <p className='h6'>Currently We are Providing Our Services at {countries.length} Countries</p>
            </Box>
            <Box className='mt-4 text-center'>
                {
                    countries.map(data => (
                        <button
                            key={key++}
                            className={`${country === data ? 'text-white primary-blue-bg' : 'primary-bordered-btn'}  button me-3 px-3 py-2 mt-2`}
                            onClick={() => handleClick(data)}>{data}</button>
                    ))
                }
            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container>
                    {
                        currPlace.map(data => (
                            <Grid key={key++} item xs={12} sm={6} md={4}>
                                <Place data={data} />
                            </Grid>
                        ))
                    }

                </Grid>

            </Box>
        </Container>
    );
};

export default CountryFiltered;