import React from 'react';
import { Link, useParams } from 'react-router-dom';
import service from '../../images/service.jpg';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (

        <>
            <div className='container'></div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <img src={service} alt="" width={500} height={300} />
                    </div>
                    <div className="col-md-6">
                        <h1>Service Details :{serviceId}</h1>
                        <h2>Dental Filling</h2>
                        <h3>$250</h3>
                        <p>This Dental Filling includes routine dental examinations or check-ups & oral health advice.</p>
                        <Link to="/checkout" >
                            <p className='btn btn-info text-light fw-bold'>CheckOut</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ServiceDetail;