import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className='container'>
            <div className="row  text-center mb-5 mt-5 sadow">
                <div class="jumbotron ">
                    <h1 class=" fw-bold">Call Now and Get a Free Consultation</h1>
                    <h5 class=" fw-bold">Free Consultation from Me</h5>

                    <p class="lead text-info fw-bold">+800 4759 1232</p>

                    <p class="lead">
                        <Link to='/'>
                            <p><button className="btn-info">Requect A Callback</button></p>
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CallToAction;