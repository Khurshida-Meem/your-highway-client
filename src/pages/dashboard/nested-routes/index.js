import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from '../../../private-routes/admin-route';
import BlogManagement from '../blog-management';
import DashboardHome from '../dashboard-home';
import UserHome from '../dashboard-home/userHome';
import MakeAdmin from '../make-admin';
import ManagePlaces from '../places';
import AddPlace from '../places/add-place';
import Luggage from '../user-dashboard/luggage';
import Reviews from '../user-dashboard/reviews';

const NestedRoutes = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <AdminRoute>
              <DashboardHome />
            </AdminRoute>
          }
        />
        <Route path="/user" element={<UserHome />} />
        <Route path="/luggage" element={<Luggage />} />
        <Route path="/my-reviews" element={<Reviews />} />
        <Route path="/blog" element={<BlogManagement />} />
        <Route
          path="/manage-places"
          element={
            <AdminRoute>
              <ManagePlaces />
            </AdminRoute>
          }
        />
        <Route
          path="/add-place"
          element={
            <AdminRoute>
              {" "}
              <AddPlace />
            </AdminRoute>
          }
        />
        <Route
          path="/make-admin"
          element={
            <AdminRoute>
              {" "}
              <MakeAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <AdminRoute>
              {" "}
              <Reviews />
            </AdminRoute>
          }
        />
      </Routes>
    );
};

export default NestedRoutes;