import {  FETCH_REVIEWS_FAIL, FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS } from "./action-types";
import travelAPI from '../base-api';
import { THUNK_SERVER } from "../server";

export const fetchReviewsRequest = () => {
  return {
    type: FETCH_REVIEWS_START,
  };
};

export const fetchReviewsSuccess = (data) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
  };
};

export const fetchReviewsFail = (error) => {
  return {
    type: FETCH_REVIEWS_FAIL,
    payload: error,
  };
};


export const fetchReviewsData = () => {
  return (dispatch) => {
    dispatch(fetchReviewsRequest);
    travelAPI
      .get("reviews")
      .then((response) => {
        const data = response.data;
        dispatch(fetchReviewsSuccess(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchReviewsFail(errMsg));
      });
  };
};


export const sendNewReview = (review, reset) => {
  return async (dispatch) => {
    await fetch(THUNK_SERVER + 'reviews', {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    alert("added place successfully");
    reset();
    dispatch(fetchReviewsData());
  };
};
