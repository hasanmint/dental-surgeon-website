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
            <h2 className='display-4 text-center'>Services Page: {services.length}</h2>
            <div className="container text-center">
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