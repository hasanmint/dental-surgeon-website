import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const ServiceDetailBtn = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>${price}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button onClick={() => ServiceDetailBtn(id)} variant="info">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>

    );
};

export default Service;