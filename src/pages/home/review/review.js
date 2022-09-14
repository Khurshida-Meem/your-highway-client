import { Card, CardContent, Rating } from "@mui/material";
import React from "react";
import './review.scss';

const Review = ({ data }) => {
  return (
    <Card className="mx-2 my-2 review shadow-small">
      <CardContent>
        <p className="text-center">- &nbsp; TESTIMONIAL &nbsp; -</p>
        <div className="d-flex justify-content-center my-2">
          <img className="rounded-circle" src={data.img} alt="" width="40px" />
        </div>
        <div className="d-flex justify-content-center">
          <Rating name="read-only" value={data.star} readOnly />
        </div>
        <hr />

        <p className="text-center">{data.comment}</p>
        <div className="mt-2 d-flex align-items-center justify-content-end">
          <div className="me-2">
            <h6>{data?.name}</h6>
            <p>{data.designation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Review;
