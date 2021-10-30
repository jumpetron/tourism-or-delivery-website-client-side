import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import team from '../../images/1.png'
import team2 from '../../images/2.png'
import team3 from '../../images/3.png'

const OurStaff = () => {
    return (
      <div>
        <div className="my-5">
          <h6>AMAZING STAFF</h6>
          <h1>Meet Our Team</h1>
        </div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid" variant="top" src={team} />
                <Card.Body>
                  <Card.Title>Austin C Hussey</Card.Title>
                  <h6>STAF</h6>
                  <Card.Text>
                    This is our dutiy to serve you, your health our main
                    priority so if thats the sitiution you belive on us, belive
                    no Empire Hospital.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid" variant="top" src={team2} />
                <Card.Body>
                  <Card.Title>Philip T Sutton</Card.Title>
                  <h6>STAF</h6>
                  <Card.Text>
                    This is our dutiy to serve you, your health our main
                    priority so if thats the sitiution you belive on us, belive
                    no Empire Hospital.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Img className="img-fluid" variant="top" src={team3} />
                <Card.Body>
                  <Card.Title>Joey J Spiller</Card.Title>
                  <h6>STAF</h6>
                  <Card.Text>
                    This is our dutiy to serve you, your health our main
                    priority so if thats the sitiution you belive on us, belive
                    no Empire Hospital.
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