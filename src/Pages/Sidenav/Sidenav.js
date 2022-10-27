import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = ({ course }) => {
  let [coursedata, setCoursedata] = useState([]);

  useEffect(() => {
    fetch("https://courses-server-beta.vercel.app/courses")
      .then((res) => res.json())
      .then((res) => setCoursedata(res));
  }, []);
  // let { name } = course;
  return (
    <div className="course-name">
      {/* <p>
        <Link>{name}</Link>
      </p> */}

      {coursedata.map((cour) => (
        <p>
          <Link to={`/courses/${cour.id}`} key={cour.id}>
            {cour.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Sidenav;
