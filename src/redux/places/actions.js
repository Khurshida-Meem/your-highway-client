import { FETCH_PLACES } from "./action-types";

export const loaded = (data) => {
  return {
    type: FETCH_PLACES,
    payload: data,
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
