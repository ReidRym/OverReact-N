import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      className="navFlex"
      variant="dark"
      expand="lg"
      style={{
        backgroundColor: "#FF0000",
        boxShadow: "0px 0px 10px #000000",
        borderRadius: "10px",
      }}
    >
      <Navbar.Brand
        href="#"
        style={{
          color: "green",
          fontFamily: "Lux",
          fontWeight: "bold",
          fontSize: "2.5rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          border: "none",
          boxShadow: "none",
        }}
      >
        Ryan Reid
        <img
          src={require("../images/war2.png")}
          alt=""
          style={{
            width: "100px",
            height: "80px",
            marginLeft: "50px",
            border: "none",
            boxShadow: "none",
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
