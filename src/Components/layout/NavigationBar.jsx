import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import { BrandLogo } from '/main/src/logo.png';

const NavigationBar = () => {
  const location = useLocation();

  const activeKey = location.pathname === '/' ? '/about' : location.pathname;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-f1ex pb-0">
          <Image
            src="https://stackblitz.com/files/react-99avqn/github/planetapex/react-js-stackblitz/main/src/images.png"
            height="30"
            className="align-top"
            alt="Company Logo"
          /> {' '}
          Reacto
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={activeKey} className="me-auto">
            <Nav.Link as={Link} eventKey="/" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/blog" to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/about" to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/contact" to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavigationBar;
