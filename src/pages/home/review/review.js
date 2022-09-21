import { Avatar, CardContent, Rating } from "@mui/material";
import React from "react";
import './review.scss';
import variables from '../../../sass/_variable.module.scss';

const Review = ({ data }) => {

  return (
    <div className="mx-2 mt-5 mb-2 review shadow-small">
      <div className="d-flex justify-content-center mb-2">
        {data?.img ? (
          <img
            className="rounded-circle review-img"
            src={data?.img}
            alt=""
            width="120px"
          />
        ) : (
          <Avatar
            className="review-img"
            sx={{ bgcolor: variables.colorDark, width: "120px", height: "120px" }}
            alt={data?.name}
          />
        )}
      </div>
      <CardContent>
        <div className="d-flex justify-content-center">
          <Rating name="read-only" value={data.star} readOnly />
        </div>
        <hr />

        <p className="text-center">{data.comment}</p>
        <div className="mt-2 d-flex align-items-center justify-content-end">
          <div className="me-4">
            <h6>{data?.name}</h6>
            <p>{data.designation}</p>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default Review;
