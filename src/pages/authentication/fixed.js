import { Box } from '@mui/material';
import React from 'react';
import './auth.scss';
import img from '../../assets/authentication.svg'

const Fixed = () => {
    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box className='side-content'>
                <img className='w-100 px-3' src={img} alt="" />
            </Box>
        </Box>
    );
};

export default Fixed;