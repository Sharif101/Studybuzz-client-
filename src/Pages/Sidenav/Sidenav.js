import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = ({ course }) => {
  let { name } = course;
  return (
    <div className="course-name">
      <p>
        <Link>{name}</Link>
      </p>
    </div>
  );
};

export default Sidenav;
