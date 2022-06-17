import React from 'react';
import img1 from '../../../assets/summertime-background-img-6.jpg';
import img2 from '../../../assets/summertime-background-img-5.jpg';
import img3 from '../../../assets/summertime-background-img-4.jpg';
import { Carousel } from 'react-bootstrap';
import './Banner.scss';


const banner = [
    {
        img: img1,
        heading: 'We Believe Your Way is Highway'
    },
    {
        img: img2,
        heading: 'We Are Here to Guide You at Our Best '
    },
    {
        img: img3,
        heading: 'Make your Vacation One of the Best With Us'
    },
]


const Banner = () => {
    return (
        <div className='banner'>

            <Carousel fade controls={false}
                style={{ "marginTop": "-100px" }}
            >

                {
                    banner.map(data => (
                        <Carousel.Item >
                            <img
                                className="d-block w-100 banner-img opacity-25"
                                src={data.img}
                                alt="First slide"
                            />
                            <Carousel.Caption className='carousel-content'>
                                <h1>{data.heading}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }



            </Carousel>

        </div>
    );
};

export default Banner;