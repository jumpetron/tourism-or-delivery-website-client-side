import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";

const Record = () => {
    return (
      <div className="update-container">
        <h1 className="py-5 text-center">We Have</h1>
        <Container>
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <h1 className="text-danger d-flex justify-content-center align-items-center">
                    4.9<AiFillStar></AiFillStar>
                  </h1>
                  <Card.Title>Cutomer Ratings</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <h1 className="text-danger">2.5M</h1>
                  <Card.Title>Trusted Users</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <h1 className="text-danger">95%</h1>
                  <Card.Title>Return Customers</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <h1 className="text-danger">180+</h1>
                  <Card.Title>Monthly Adventure</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Record;