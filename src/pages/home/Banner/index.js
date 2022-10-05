import React from 'react';
import img1 from '../../../assets/summertime-background-img-6.jpg';
import img2 from '../../../assets/summertime-background-img-5.jpg';
import img3 from '../../../assets/summertime-background-img-4.jpg';
import { Carousel } from 'react-bootstrap';
import './Banner.scss';

let key = 0;
const banner = [
    {
        img: img1,
        heading: 'We Believe Your Way is The Highway',
        desc: 'Find awesome flights, hotel, tour, car and packages'
    },
    {
        img: img2,
        heading: 'Explore The World Together',
        desc: 'Find awesome flights, hotel, tour, car and packages'
    },
    {
        img: img3,
        heading: 'Make your Vacation One of the Best With Us',
        desc: 'Find awesome flights, hotel, tour, car and packages'
    },
]


const Banner = () => {
    return (
        <div className='banner'>
            <Carousel
                fade
                controls={false}
                indicators={false}
            >
                {
                    banner.map(data => (
                        <Carousel.Item key={key++} >
                            <img
                                className="img-fluid d-block w-100 banner-img opacity-50"
                                src={data.img}
                                alt="First slide"
                            />
                            <Carousel.Caption className='carousel-content'>
                                <h1 className='display-3 text-white'>{data.heading}</h1>
                                <p className='h6 text-white'>{data.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }



            </Carousel>

        </div>
    );
};

export default Banner;