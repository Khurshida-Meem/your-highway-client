import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import DrawerSmall from './drawer-sm';
// import logo from '../../../images/agiliux-main.png'
import AppbarElements from './appbar-elements';
import { useNavigate } from 'react-router-dom';

const AppbarSmall = ({ handleMenuClick }) => {
    
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/', { replace: true });
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-white'>
                <Toolbar>
                    {/* <img className='me-1' src={logo} alt="" height='30px' /> */}
                    <h4 className='cursor-pointer' onClick={handleLogoClick}>Your Highway</h4>
                    <AppbarElements />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <DrawerSmall handleMenuClick={handleMenuClick} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppbarSmall;