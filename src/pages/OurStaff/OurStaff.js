import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import team from '../../images/1.png'
import team2 from '../../images/2.png'
import team3 from '../../images/3.png'
import './OurStaff.css'

const OurStaff = () => {
    return (
      <div>
        <div className="my-5 text-center">
          <h6 className="text-danger">AMAZING STAFF</h6>
          <h1>Meet Our Team</h1>
        </div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid team-img" variant="top" src={team} />
                <Card.Body>
                  <Card.Title className="text-center">Austin C Hussey</Card.Title>
                  <h6 className="text-center">STAF</h6>
                  <Card.Text>
                    Hey, I’m Hussey! Obsessed with exploring the world, meeting
                    new people and getting as lost as possible with my camera.I
                    was on the road for 1467 days between 2014 – 2018.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid" variant="top" src={team2} />
                <Card.Body>
                  <Card.Title className="text-center">Philip T Sutton</Card.Title>
                  <h6 className="text-center">STAF</h6>
                  <Card.Text>
                    I’m originally from Quebec, Canada. Back in the days, I used
                    to be a social worker. I used to travel once a year for
                    about a month and I was always spending my summers in..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid" variant="top" src={team3} />
                <Card.Body>
                  <Card.Title className="text-center">Joey J Spiller</Card.Title>
                  <h6 className="text-center">STAF</h6>
                  <Card.Text>
                    Hi, I’m Spiller. In August 2017 I sold everything I didn’t
                    need, packed what was left in a suitcase, and left home with
                    only a one-way ticket to Tanzania. No plan, no bucket list,
                    no end date.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default OurStaff;