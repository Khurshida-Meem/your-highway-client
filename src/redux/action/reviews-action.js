import travelAPI from "../base-api";
import { FETCH_REVIEWS_FAIL, FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS } from "./action-types";

export const fetchPlacesRequest = () => {
  return {
    type: FETCH_REVIEWS_START,
  };
};

const fetchPlacesSuccess = (data) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
  };
};

const fetchPlacesFail = (error) => {
  return {
    type: FETCH_REVIEWS_FAIL,
    payload: error,
  };
};

export const fetchPlacesData = () => {
  return (dispatch) => {
    dispatch(fetchPlacesRequest);
    travelAPI
      .get("reviews")
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

// export const sendNewPlace = (data, reset) => {
//     travelAPI.post('places', data)
//         .then(res => {
//             if (res.data.insertedId) {
//                 alert('added place successfully');
//                 reset();
//             }
//         })
// }
