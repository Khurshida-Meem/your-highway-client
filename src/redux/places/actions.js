import { FETCH_PLACES, PLACES_SEARCH } from "./action-types";

export const loaded = (data) => {
  return {
    type: FETCH_PLACES,
    payload: data,
  };
};

export const searchKey = (key) => {
  return {
    type: PLACES_SEARCH,
    payload: key,
  };
};




// export const fetchPlacesData = () => {
//   return (dispatch) => {
//     dispatch(fetchPlacesRequest);
//     travelAPI
//       .get("places")
//       .then((response) => {
//         const data = response.data;
//         dispatch(fetchPlacesSuccess(data));
//       })
//       .catch((error) => {
//         const errMsg = error.message;
//         dispatch(fetchPlacesFail(errMsg));
//       });
//   };
// };
