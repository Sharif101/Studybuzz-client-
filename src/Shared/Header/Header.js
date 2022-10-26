import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../assest/logo/logo.png";
import "./Header.css";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} alt="" />
            <Link to="/" className="nav-title">
              Study Buzz
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog">Blog</Link>
              <Button className="log-btn" variant="info">
                Log in
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
