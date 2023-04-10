import React from "react";
import img from "../../assets/no-result.png";

const NoResult = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={img} alt="" />
      <p>No Result Found</p>
    </div>
  );
};

export default NoResult;
