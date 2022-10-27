import React from "react";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <div>
      <Form className="form">
        <h3>Register here</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control type="text" placeholder="Photo url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="log-button">Register</button>
      </Form>
    </div>
  );
};

export default Register;
