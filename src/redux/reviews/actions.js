import {
  DELETED,
  FETCH_REVIEWS_FAIL,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
} from "./action-types";
import travelAPI from "../base-api";

const fetchReviewsRequest = () => {
  return {
    type: FETCH_REVIEWS_START,
  };
};

const fetchReviewsSuccess = (data) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
  };
};

const fetchReviewsFail = (error) => {
  return {
    type: FETCH_REVIEWS_FAIL,
    payload: error,
  };
};

const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
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

export const deleteReview = (id) => {
  return (dispatch) => {
    travelAPI.delete(`reviews/${id}`).then(() => dispatch(fetchReviewsData()) );
    dispatch(deleted(id));
  };
};

export const updateReview = (id, review) => {
  return (dispatch) => {
    travelAPI
      .put(`reviews/${id}`, {
        name: review.name,
        designation: review.designation,
        comment: review.comment,
        star: review.star,
      })
      .then(() => dispatch(fetchReviewsData()));
  };
};
