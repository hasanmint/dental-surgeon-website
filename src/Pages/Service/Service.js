import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const ServiceDetailBtn = (id, name, img, description, price) => {
        navigate(`/service/${id}`)
    }
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => ServiceDetailBtn(id, name, img, description, price)} variant="info">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>

    );
};

export default Service;