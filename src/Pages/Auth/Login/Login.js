import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    let emailError;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, sendError] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async (event) => {
        const email = event.target.email.value;
        console.log(email);
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }


    if (error) {

        emailError = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow-none p-3 mb-5 bg-light rounded">
                    <h1 className="text-center fw-bolder">Login</h1>
                    <div className='text-dark text-center fw-bolder'>
                        <p> New Here? <Link to='/register' className='text-success text-decoration-none fw-bold'>Create An Account</Link></p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <input type="email" className='form-control' name="email" id="" placeholder='Enter Email' required />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className='form-control' name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <button type="submit" className="btn btn-info w-100 fw-bold">Login</button>

                    </form>
                    <p className='mt-3 text-center'>{emailError}</p>
                    <div className='text-dark text-end fw-bolder mt-2'>
                        <p> New Here? <button onClick={resetPassword} className='text-success text-decoration-none fw-bold' type='submit'>Forgot Password </button></p>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>

        </div>
    );
};

export default Login;