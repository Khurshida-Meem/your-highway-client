import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/authentication/sign-in';
import Home from './pages/home';


const Main = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
            </Router>

        </div>
    );
};

export default Main;