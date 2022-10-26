import React from "react";
import { useLoaderData } from "react-router-dom";

const Coursedetails = () => {
  let details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export default Coursedetails;
