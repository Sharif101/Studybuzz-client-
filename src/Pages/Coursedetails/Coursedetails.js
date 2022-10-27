import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCrown } from "@fortawesome/free-solid-svg-icons";
import "./Coursedetails.css";

const ref = React.createRef();
const Coursedetails = () => {
  let details = useLoaderData();
  console.log(details);
  return (
    <div ref={ref}>
      {/* <h1>{details.name}</h1> */}

      <Card className="card-bd">
        <Card.Img variant="top" src={details.image_url} />

        <Pdf targetRef={ref} filename={`${details.name}.pdf`}>
          {({ toPdf }) => (
            <button className="pdf-btn" onClick={toPdf}>
              Download pdf
            </button>
          )}
        </Pdf>
        <Card.Body className="text">
          <div>
            <Card.Title>
              <h2>{details.name}</h2>
            </Card.Title>
            <Card.Text>
              <p>{details.details}</p>
            </Card.Text>
          </div>
          <div className="card-ic">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <div className="d-flex justify-content-between my-3 card-shortinfo">
            <p>Total Class: {details.total_class}</p>
            <p>Total Project: {details.total_project}</p>
            <p>Total Fee: {details.total_fee}</p>
          </div>
          <Link to={`/courses/${details.id}/premium`}>
            <button className="premium-btn">
              Get Prenium <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Coursedetails;
