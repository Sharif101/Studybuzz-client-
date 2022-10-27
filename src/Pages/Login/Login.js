import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  let { providerlogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  let handlegooglesingin = () => {
    providerlogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error());
  };

  let { signIn } = useContext(AuthContext);

  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <h3>
          Please Login here{" "}
          <FontAwesomeIcon icon={faFaceSmileBeam}></FontAwesomeIcon>
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          You haven't any account
          <Link to="/register">register here</Link>
        </p>
        <button className="log-button">Log In</button>
        <div>
          <p className="text-center">Or sing up using</p>
          <div className="d-flex flex-column social-singup">
            <button onClick={handlegooglesingin}>Google</button>
            <button>Github</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
