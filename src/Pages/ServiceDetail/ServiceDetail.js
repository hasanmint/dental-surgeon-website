import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <>
                <Card>
                    {/* <Card.Img variant="top" src={serviceId} /> */}
                    <Card.Body>
                        <Card.Text>
                            <div>
                                Service Details :{serviceId}
                                <div className="text-center">
                                    <Link to='/checkout'>
                                        <button className="btn-info">CheckOut</button>
                                    </Link>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>
        </div>
    );
};

export default ServiceDetail;