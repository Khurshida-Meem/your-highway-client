import { Box, LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebaseContext } = useAuth();
    const { user, isLoading } = firebaseContext;
    let location = useLocation();
    if (isLoading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateRoute;