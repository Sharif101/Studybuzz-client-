import React from "react";
import { useLoaderData } from "react-router-dom";

const Getpremium = () => {
  let getpre = useLoaderData();
  console.log(getpre);
  return (
    <div>
      <h1>{getpre.name}</h1>
    </div>
  );
};

export default Getpremium;
