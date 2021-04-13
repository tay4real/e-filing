import React from "react";
import { Image } from "react-bootstrap";
import loader from "../../assets/Bars-1s-200px.svg";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "20px", width: "60px" }}
      >
        <Image src={loader} alt="loader" />
        
      </div>
    </div>
  );
};

export default Loader;
