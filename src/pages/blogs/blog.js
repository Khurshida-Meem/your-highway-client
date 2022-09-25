import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(id, { replace: true });
  };

  return (
    <div key={data?._id} className="col">
      <div className="card h-100">
        <img
          src={data?.thumb}
          className="card-img-top"
          alt="..."
          height="180px"
        />
        <div className="card-body">
          <span className="tag px-2 rounded-pill p fw-bold">
            {data?.category}
          </span>
          <h4 className="card-title mt-2">{data?.title}</h4>
          <p>{data?.date}</p>

          <p className="card-text h6 text-black">
            {(data?.blog).slice(0, 120)}...
          </p>
        </div>
        <div className="card-footer bg-white border-0">
          <p
            onClick={() => handleClick(data?._id)}
            className="text-muted h6 cursor-pointer"
          >
            See more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
