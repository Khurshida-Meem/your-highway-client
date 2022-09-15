import { Container } from '@mui/material';
import React from 'react';
import img1 from '../../../assets/imagination1.png';
import img2 from '../../../assets/imagination2.png';
import img3 from '../../../assets/imagination3.png';
import './intro.scss';

let key = 0;

const cards = [
    {
        img: img1,
        desc: '7% Discount for all airlines',
    },
    {
        img: img2,
        desc: 'Travel around the world',
    },
    {
        img: img3,
        desc: 'Luxury resorts top deals',
    }
]

const Intro = () => {
    return (
        <Container sx={{ mt: 7, display: {xs: 'none', md: 'block'} }}>
            <div className="row">
                <div className="col mt-5 d-flex align-items-center">
                    <div>
                        <h1>Go beyond your imagination</h1>
                    <hr className='me-5' />
                    <p className='h4'>Discover your ideal experience with us</p>
                    </div>
                    
                </div>
                {
                    cards.map(data => (
                        <div key={key++} className="col mt-5">
                            <div className='card-container intro'>
                                <div className='img-container hover-effect'>
                                    <img className='img-fluid intro-img' src={data.img} alt="" />
                                </div>
                            </div>
                            <p className='text text-white h3 mx-3'>{data.desc}</p>
                        </div>
                    ))
                }

            </div>
        </Container>
    );
};

export default Intro;