import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../assest/logo/logo.png";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  let [username, setUsername] = useState(false);

  let [toggle, setToggle] = useState(false);

  let handleSingout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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

              {/* <Link to="/register">
                <Button className="log-btn" variant="info">
                  Register
                </Button>
              </Link> */}

              {toggle ? (
                <FontAwesomeIcon
                  className="sun"
                  icon={faSun}
                  onClick={() => setToggle(!toggle)}
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  className="moon"
                  icon={faMoon}
                  onClick={() => setToggle(!toggle)}
                ></FontAwesomeIcon>
              )}

              {user?.photoURL && (
                <div className="nav-image">
                  <img
                    onMouseEnter={() => setUsername(true)}
                    onMouseLeave={() => setUsername(false)}
                    src={user.photoURL}
                    alt=""
                    className="acc-img"
                  />
                  <p
                    className={
                      username ? "visible showName" : "visible hideName"
                    }
                  >
                    {user?.displayName}
                  </p>
                </div>
              )}

              {user?.uid ? (
                <Button
                  className="log-btn"
                  variant="info"
                  onClick={handleSingout}
                >
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="log-btn" variant="info">
                    Log in
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
