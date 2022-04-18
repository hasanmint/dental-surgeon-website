import React from 'react';
import google from '../../../images/social/google-icon.svg';
import facebook from '../../../images/social/facebook-icon.svg';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let googleError;
    if (error) {

        googleError = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/services');
    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
                <div className='m-2'>Or</div>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
            </div>
            <p>{googleError}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-success w-100">
                    <img src={google} alt="google" width={30} height={30} />
                    Google SignIn</button>
            </div>
            <div className='mt-2'>
                <div className="btn btn-primary w-100">
                    <img src={facebook} alt="facebook" width={30} height={30} />
                    Facebook SignIn</div>
            </div>

        </>
    );
};

export default SocialLogin;