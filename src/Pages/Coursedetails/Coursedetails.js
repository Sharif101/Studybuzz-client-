import React from "react";
import { useLoaderData } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Coursedetails = () => {
  let details = useLoaderData();
  console.log(details);
  return (
    <div>
      {/* <h1>{details.name}</h1> */}

      <Card>
        <Card.Img variant="top" src={details.image_url} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>{details.details}</Card.Text>
          <div className="d-flex justify-content-between">
            <p>Total Class: {details.total_class}</p>
            <p>Total Project: {details.total_project}</p>
            <p>Total Fee: {details.total_fee}</p>
          </div>
          <button>Get Prenium</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Coursedetails;
