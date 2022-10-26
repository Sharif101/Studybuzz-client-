import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import Sidenav from "../Sidenav/Sidenav";
import "./Courses.css";

const Courses = () => {
  let courses = useLoaderData();
  // let { name } = courses;
  // console.log(courses);
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            {courses.map((course) => (
              <Sidenav key={courses.id} course={course}></Sidenav>
            ))}
          </Col>
          <Col lg="8" className="course-card mt-3">
            {courses.map((course) => (
              <Course course={course} key={course.id}></Course>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
