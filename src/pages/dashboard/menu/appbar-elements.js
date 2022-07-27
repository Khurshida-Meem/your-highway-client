import { Avatar, Badge, Box } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import React from 'react';
import Dropdown from './dropdown';
import { useNavigate } from 'react-router-dom';

const AppbarElements = () => {

    const navigate = useNavigate();

    const handleMenuClick = (link) => {
        navigate('..' + link, { replace: true });
    }

    return (
        <Box className='d-flex align-items-center'>
            <Badge
                onClick={() => handleMenuClick('/dashboard/notifications')}
                sx={{ ml: 4, cursor: 'pointer' }}
                color="secondary"
                badgeContent={4}>
                <NotificationsNoneIcon className='primary-text' />
            </Badge>
            <Avatar
                sx={{ ml: 4, mr: 1 }}
                className='dark-bg'
                alt="Khurshida"
                src="/broken-image.jpg"
            />

            <Dropdown name={'Khurshida'} />
        </Box>
    );
};

export default AppbarElements;