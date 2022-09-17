import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Places from './pages/all-places';
import SignIn from './pages/authentication/sign-in';
import SignUp from './pages/authentication/sign-up';
import Dashboard from './pages/dashboard/menu';
import Home from './pages/home';
import SinglePlace from './pages/home/shared/single-place';
import Packages from './pages/tour-packages';
import PrivateRoute from './private-routes';


const Main = () => {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route
              path="/places/:placesId"
              element={
                <PrivateRoute>
                  <SinglePlace />
                </PrivateRoute>
              }
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/packages"
              element={
                <PrivateRoute>
                  <Packages />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    );
};

export default Main;