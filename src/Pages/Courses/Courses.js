import React from "react";
// import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  let courses = useLoaderData();
  // let { name } = courses;
  // console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <Course course={course} key={course.id}></Course>
      ))}
    </div>
  );
};

export default Courses;
