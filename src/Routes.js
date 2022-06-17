import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';


const Main = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    
                </Routes>
            </Router>

        </div>
    );
};

export default Main;