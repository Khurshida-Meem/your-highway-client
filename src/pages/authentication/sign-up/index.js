import { Box, Container } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Fixed from '../fixed';


const SignUp = () => {

    const { firebaseContext } = useAuth();
    const { createUsingEmailPassword, error, setError } = firebaseContext;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        if (data?.password?.length < 6) {
            setError('Password should be 6 charecters');
            return;
        }
        // create account
        createUsingEmailPassword(data?.email, data?.password, data?.username, navigate)
    };

    return (
        <div>
            <Container sx={{display: 'flex', justifyContent: {xs: 'center', md:'start'}}}>
                <Box sx={{ mt: 15, ml:{md:5} }}>
                    <h1 className='text-center primary-text'>Your Highway</h1>
                    <form className='form-inputs text-center mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className='field p-3' type="text" placeholder="Username*" {...register("username", { required: true })} />
                        {errors.username && <span className='error'>This field is required</span>}
                        <input className='field p-3 mt-4' type="email" placeholder="Email*" {...register("email", { required: true })} />
                        {errors.email && <span className='error'>This field is required</span>}
                        <input className='field p-3 mt-4' type="password" placeholder="Password*" {...register("password", { required: true })} />
                        {errors.password && <span className='error'>This field is required</span>}
                        {error && <span className='error mt-3'>{error}</span>}
                        <button type="submit" className="mt-3 gradient-bg button py-2 px-5 w-100"> Sign Up</button>
                    </form>
                    <hr />
                    <p className='text-center mt-3'><Link to='/sign-in'>Already Registered? </Link></p>
                    <p className='text-center mt-3'><Link to='/'>Back to Home </Link></p>
                    
                </Box>

            </Container>
            <Fixed />

        </div>
    );
};

export default SignUp;