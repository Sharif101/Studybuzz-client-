import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Studypress</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
