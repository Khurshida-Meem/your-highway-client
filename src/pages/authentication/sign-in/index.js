import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box, Container } from '@mui/material';
import '../auth.scss';
import Fixed from '../fixed';
import { useForm } from 'react-hook-form';

const SignIn = () => {

    const { firebaseContext } = useAuth();
    const { signInUsingGoogle, signInUsingEmailandPass, error,setError } = firebaseContext;

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInUsingGoogle(navigate, location);
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data?.password.length < 6) {
            setError('Password should be at least 6 charecters');
            return;
        }
        signInUsingEmailandPass(data?.email, data?.password, navigate, location);
    };

    return (
        <div>
            <Container className='d-flex'>
                <Box sx={{ mt: 30 }}>
                    <form className='form-inputs text-center' onSubmit={handleSubmit(onSubmit)}>
                        <input className='field p-3' type="email" placeholder="Email*" {...register("email", { required: true })} />
                        {errors.email && <span className='error'>This field is required</span>}
                        <input className='field p-3 mt-4' type="password" placeholder="Password*" {...register("password", { required: true })} />
                        {errors.password && <span className='error'>This field is required</span>}
                        {error && <span className='error mt-3'>{error}</span>}
                        <button type="submit" className="mt-3 gradient-bg button py-2 px-5 w-100"> Sign In</button>
                    </form>
                    <hr />
                    <div className='text-center'>
                        <button onClick={handleGoogleLogin}  className="mt-3 gradient-bg button py-2 px-5">Google Login</button>
                    </div>
                    
                </Box>

            </Container>
            <Fixed />

        </div>
    );
};

export default SignIn;