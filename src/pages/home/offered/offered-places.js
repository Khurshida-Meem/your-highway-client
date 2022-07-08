import { Card, CardContent, CardMedia, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchPlacesData } from '../../../redux/action/places-action';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const OfferedPlaces = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const placesData = useSelector(state => state.places.data)
    placesData.splice(6, placesData.length);

    useEffect(() => {
        dispatch(fetchPlacesData())
    }, [dispatch])

    const handleClick = () => {
        navigate('details', {replace: true})
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <Slider {...settings}>
            {
                placesData?.map(data => (
                    <div className='font-poppins text-white'>
                        <Card sx={{ maxWidth: 345, mr:2 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.thumb}
                                alt={data.destination}
                            />
                            <CardContent>
                                <h3>{data.destination}</h3>
                                <p><LocationOnIcon sx={{ fontSize: '1.2rem' }} className='pink-color' />{data.country} </p>
                                <Rating name="read-only" value={data.star} precision={0.5} readOnly />
                                <p>({data.starCount} Reviews)</p>
                                <button className='p text-white button pink-bg p-2' onClick={handleClick}>View Details</button>
                            </CardContent>
                            
                        </Card>
                    </div>
                ))
            }
        </Slider>
    );
};

export default OfferedPlaces;