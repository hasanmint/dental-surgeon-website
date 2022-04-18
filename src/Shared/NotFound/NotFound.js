import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404page.png';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-6 text-center mt-200">
                    <h2 className="text-center">Error 404</h2>
                    <h4 className="text-center"> Oops! The page you're looking for isn't here.</h4>
                    <Link to="/" >
                        <p className='btn btn-info text-light fw-bold'>Back to Home</p>
                    </Link>

                </div>
                <div className="col-md-6">
                    <img src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;