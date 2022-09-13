import { FETCH_PLACES_FAIL, FETCH_PLACES_START, FETCH_PLACES_SUCCESS } from "./action-types";
import travelAPI from '../base-api';

export const fetchPlacesRequest = () => {
  return {
    type: FETCH_PLACES_START,
  };
};

export const fetchPlacesSuccess = (data) => {
  return {
    type: FETCH_PLACES_SUCCESS,
    payload: data,
  };
};

export const fetchPlacesFail = (error) => {
  return {
    type: FETCH_PLACES_FAIL,
    payload: error,
  };
};


export const fetchPlacesData = () => {
  return (dispatch) => {
    dispatch(fetchPlacesRequest);
    travelAPI
      .get("places")
      .then((response) => {
        const data = response.data;
        dispatch(fetchPlacesSuccess(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchPlacesFail(errMsg));
      });
  };
};
