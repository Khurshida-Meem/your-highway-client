import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import './Navbar.scss';
import MobileMenu from './mobile-menu';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import useAuth from '../../hooks/useAuth';


let key = 0;
const pages = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Destinations',
        link: '/places',
    },
    {
        name: 'Blogs',
        link: '/blogs',
    },
    
]

const Navbar = () => {

    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;

    return (
        <AppBar className='primary-blue-bg' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        className='logo'
                        src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                        alt="logo" />

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box className='d-flex ms-5'>
                            {
                                pages.map(page => (
                                    <div key={key++} className='ms-4'>
                                        <Link className='link py-1 px-3' to={page.link}>{page.name}</Link>
                                    </div>
                                ))
                            }
                            {user?.email ? '' : <div className='ms-4'>
                                <Link className='link py-1 px-3' to='sign-in'>Sign In</Link>
                            </div>}
                        </Box>

                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>

                    {user.email ?
                        <>
                            <Avatar
                                sx={{ ml: 4, mr: 1 }}
                                className='pink-bg'
                                alt={user?.displayName}
                                src="/broken-image.jpg"
                            />
                            <Dropdown name={user?.displayName} />
                        </> : ''}

                    <Box sx={{ display: { md: 'none' } }}>
                        <MobileMenu />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default Navbar;