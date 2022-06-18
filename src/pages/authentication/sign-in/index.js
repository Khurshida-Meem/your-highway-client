import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {

    const { firebaseContext } = useAuth();
    const { signInUsingGoogle, signInUsingEmailandPass, error } = firebaseContext;

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInUsingGoogle(navigate, location);
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default SignIn;