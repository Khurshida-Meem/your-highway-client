import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../../hooks/useAuth";
import {
  fetchReviewsData,
  sendNewPlace,
} from "../../../../redux/reviews/actions";
import "./reviews.scss";

const Reviews = () => {
  const dispatch = useDispatch();
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const [star, setStar] = useState(5);
  const placesData = useSelector((state) => state?.reviews?.data);

  useEffect(() => {
    dispatch(fetchReviewsData());
  }, [dispatch]);

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
    };
    sendNewPlace(rating, reset);
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5>Please share your experience with us</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Rating
            name="simple-controlled"
            value={star}
            onChange={(event, newValue) => {
              setStar(newValue);
            }}
          />
          <textarea
            className="d-block bordered-input p-2"
            rows="4"
            cols="50"
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
    </div>
  );
};

export default Reviews;
