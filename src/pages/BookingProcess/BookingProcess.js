import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './BookingProcess.css'

const BookingProcess = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://obscure-bayou-41307.herokuapp.com/books/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div> 
            <h1 className="my-5 text-center">Your Booking In Process.</h1>
            <Container>
                <Row xs={1} md={3} className="g-4 my-5">
                    <Col></Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src={user.picture} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.info}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingProcess;