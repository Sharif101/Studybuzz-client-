import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Form className="form">
        <h3>
          Please Login here{" "}
          <FontAwesomeIcon icon={faFaceSmileBeam}></FontAwesomeIcon>
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p>
          You haven't any account
          <Link to="/register">register here</Link>
        </p>
        <button className="log-button">Log In</button>
        <div>
          <p className="text-center">Or sing up using</p>
          <div className="d-flex flex-column social-singup">
            <button>Google</button>
            <button>Github</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
