import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import Place from '../shared/place';
import fetchPlaces from '../../../redux/places/thunk/fetch-places';


let key = 0;
const OfferedPlaces = () => {

    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places)
    const placesData = places.slice(0, 5);

    useEffect(() => {
        dispatch(fetchPlaces)
    }, [dispatch])

    
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
        <Slider {...settings}>
            {
                placesData?.map(data => (
                    <div key={key++}>
                        <Place data={data} />
                    </div>
                ))
            }
        </Slider>
    );
};

export default OfferedPlaces;