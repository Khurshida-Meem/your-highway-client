import {
  FETCH_REVIEWS_FAIL,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
} from "./action-types";
import travelAPI from "../base-api";
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

export const sendNewReview = (data, reset) => {
  return (dispatch) => {
    travelAPI.post("reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("added place successfully");
        reset();
        dispatch(fetchReviewsData());
      }
    });
  };
};

