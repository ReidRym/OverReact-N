import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#">Ryan Reid</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="#" active>
          Home
          <span className="sr-only"></span>
        </Nav.Link>
        <Nav.Link as={Link} to="#">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="#">
          Portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="#">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="#">
            Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
