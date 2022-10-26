import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Course.css";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  let { name, id, image_url, title } = course;
  return (
    <div>
      <Card>
        <Card.Img className="card-img" variant="top" src={image_url} />
        <Card.Body className="card-cour">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <Link to={`/courses/${id}`}>
            <button className="enroll-btn">
              Enroll me
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
