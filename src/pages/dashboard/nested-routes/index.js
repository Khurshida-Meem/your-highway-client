import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from '../../../private-routes/admin-route';
import BlogManagement from '../blog-management';
import AddBlog from '../blog-management/add-blog';
import AllBlogs from '../blog-management/all-blogs';
import Bookings from '../bookings';
import Comments from '../comments';
import DashboardHome from '../dashboard-home';
import UserHome from '../dashboard-home/userHome';
import ManageHotels from '../hotel-management';
import AddHotel from '../hotel-management/add-hotel';
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
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/comment" element={<Comments />} />
        <Route
          path="/all-blogs"
          element={
            <AdminRoute>
              <AllBlogs />
            </AdminRoute>
          }
        />
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
        <Route
          path="/hotels"
          element={
            <AdminRoute>
              {" "}
              <ManageHotels />
            </AdminRoute>
          }
        />
        <Route
          path="/add-hotel"
          element={
            <AdminRoute>
              {" "}
              <AddHotel />
            </AdminRoute>
          }
        />
      </Routes>
    );
};

export default NestedRoutes;