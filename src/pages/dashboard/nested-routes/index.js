import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from '../dashboard-home';
import ManagePlaces from '../places';
import AddPlace from '../places/add-place';

const NestedRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardHome />} />
            <Route path='/manage-places' element={<ManagePlaces />} />
            <Route path='/add-place' element={<AddPlace />} />
        </Routes>
    );
};

export default NestedRoutes;