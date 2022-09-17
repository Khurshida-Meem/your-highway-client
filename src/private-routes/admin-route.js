import { Box, LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { firebaseContext } = useAuth();
    const { user, isLoading, admin } = firebaseContext;

    let location = useLocation();

    if (!admin || isLoading) {
      return (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      );
    }
    
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
};

export default AdminRoute;