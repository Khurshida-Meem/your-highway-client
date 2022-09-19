import React from 'react';

const SingleBlog = ({data}) => {
    return (
      <div key={data?._id} className="col">
        <div className="card h-100">
          <img
            src={data?.data?.thumb}
            className="card-img-top"
            alt="..."
            height="180px"
          />
          <div className="card-body">
            <span className="tag px-2 rounded-pill p fw-bold">{data?.category}</span>
            <h4 className="card-title mt-2">{data?.data?.title}</h4>
            <p>Sep 19, 2022</p>

            <p className="card-text h6 text-black">
              {(data?.data?.blog).slice(0, 120)}...
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <p className="text-muted h6 cursor-pointer">See more</p>
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;