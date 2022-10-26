import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Course.css";

const Course = ({ course }) => {
  let { name, id, image_url, title } = course;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <button className="enroll-btn">
            Enroll me
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
