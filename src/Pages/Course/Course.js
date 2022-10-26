import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Course.css";

const Course = ({ course }) => {
  let { name, id, image_url, title } = course;
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <p>{name}</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
