import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
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
                        <Button variant="info">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>

    );
};

export default Service;