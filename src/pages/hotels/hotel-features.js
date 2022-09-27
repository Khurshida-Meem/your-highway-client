import React from "react";

const HotelFeatures = ({data}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data?.img}
            className="img-fluid rounded-start"
            alt={data?.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFeatures;
