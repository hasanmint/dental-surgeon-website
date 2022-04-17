import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-info text-center'>My Services</h2>
            <div className="container text-center mt-5 mb-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}

                            >
                            </Service>
                        )
                    }
                </Row>
            </div>

        </div>
    );
};

export default Services;