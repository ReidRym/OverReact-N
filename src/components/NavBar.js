import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarz = () => {
  return (
    <Navbar bg="primary" className= "navFlex" variant="dark">
      <Navbar.Brand href="#">Ryan Reid</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" active>
          Home
          <span className="sr-only"></span>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/portfolio">
          Portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/resume">
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBarz;
