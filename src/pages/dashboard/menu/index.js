import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './menu.scss';
import { useNavigate } from 'react-router-dom';
import DrawerLarge from './drawer-md';
import AppbarSmall from './appbar-sm';
import AppbarElements from './appbar-elements';
import NestedRoutes from '../nested-routes';


const drawerWidth = 210;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));





const Dashboard = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    // mobile dropdown menu ends

    let navigate = useNavigate();


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (link) => {
        navigate('..' + link, { replace: true });
    }



    return (
        <Box sx={{ display: {md: 'flex'} }}>
            <CssBaseline />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <AppBar position="fixed" open={open}>
                    <Toolbar sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {open ?
                                <IconButton color="primary" onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <MenuOpenIcon /> : <MenuOpenIcon />}
                                </IconButton>
                                :
                                <IconButton
                                    color="primary"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{
                                        marginRight: 5,
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>}
                            <h6 className='black-text mt-2'>
                                Welcome Back
                            </h6>
                        </Box>
                        <AppbarElements />

                    </Toolbar>
                </AppBar>

                <DrawerLarge open={open} handleMenuClick={handleMenuClick} />
            </Box>

            {/* for small devices */}
            <Box sx={{ display: { md: 'none' } }}>
                <AppbarSmall handleMenuClick={handleMenuClick} />
            </Box>

            <Box component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    height: '100vh',
                    width: { md: `calc(100% - ${drawerWidth}px)` }
                }}>
                <DrawerHeader />
                <Box>
                    <NestedRoutes />
                </Box>
                <Box className='mt-3' sx={{ color: 'transparent' }}>margin</Box>
                

            </Box>
        </Box>
    );
};

export default Dashboard;