import React from "react";
import { Col, Row } from "react-bootstrap";

const Courses = () => {
  return (
    <div>
      <Row>
        <Col lg="4">
          <h3>left side</h3>
        </Col>
        <Col lg="8">
          <h4>right siide</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
