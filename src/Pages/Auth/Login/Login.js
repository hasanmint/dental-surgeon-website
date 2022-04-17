import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow-none p-3 mb-5 bg-light rounded">
                    <h2 className="text-center">Login</h2>
                    <form>
                        <div className="form-group mb-3">
                            <input type="text" className='form-control' name="email" id="" placeholder='Enter Email' />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className='form-control' name="password" id="" placeholder='Enter Password' />
                        </div>
                        <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="btn btn-info w-100">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;