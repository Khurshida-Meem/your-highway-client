import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../../hooks/useAuth";
import {
  fetchReviewsData, sendNewReview,
  
} from "../../../../redux/reviews/actions";
import AllReviews from "./reviews";
import "./reviews.scss";

const Reviews = () => {
  const dispatch = useDispatch();
  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;
  const [star, setStar] = useState(5);
  const reviewsData = useSelector((state) => state?.reviews?.data);

  admin || reviewsData.filter(data => data?.email === user?.email);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const rating = {
      ...data,
      star: star,
      email: user?.email,
      img: user?.photoURL,
      name: user?.displayName,
    };
    dispatch(sendNewReview(rating, reset));
  };

  useEffect(() => {
    dispatch(fetchReviewsData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className={admin ? 'd-none' : ''}>
          <h5>Please share your experience with us</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Rating
              name="simple-controlled"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue);
              }}
            />
            <input
              className="d-block w-50 bordered-input p-2"
              placeholder="Your Designation"
              cols="50"
              type="text"
              {...register("designation", { required: true })}
            />
            {errors.designation && (
              <span className="d-block color-red">This field is required</span>
            )}
            <textarea
              className="mt-2 d-block w-50 bordered-input p-2"
              rows="4"
              placeholder="Please share your thought"
              {...register("comment", { required: true })}
            />
            {errors.comment && (
              <span className="d-block color-red">This field is required</span>
            )}

            <input
              className="d-block mt-3 primary-blue-bg button px-3 py-2"
              type="submit"
            />
          </form>
        </div>
        <AllReviews />
      </div>
    </div>
  );
};

export default Reviews;
