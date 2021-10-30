import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Topbar = () => {
    const { user, logOut } = useAuth();

    return (
      <div>
        <Navbar className="" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Touriso</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/trips">
                  Trips
                </Nav.Link>
                <div>
                  {user?.email ? (
                    <Button onClick={logOut} className="btn mx-2 custom-btn">
                      Logout
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button className="btn mx-2 custom-btn">Sign in</Button>
                    </Link>
                  )}
                  {user.email ? (
                    <b>{user?.displayName}</b>
                  ) : (
                    <Link to="/login">
                      <Button className="btn custom-btn">Register</Button>
                    </Link>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Topbar;