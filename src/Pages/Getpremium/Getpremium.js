import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Getpremium.css";

const Getpremium = () => {
  let getpre = useLoaderData();
  let { name, image_url } = getpre;
  // console.log(getpre);
  return (
    <div>
      {/* <h1>{name}</h1> */}
      <div className="get-box">
        <div className="get-card">
          <div className="get-img">
            <img src={image_url} alt="" />
          </div>
          <div className="get-details">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getpremium;
