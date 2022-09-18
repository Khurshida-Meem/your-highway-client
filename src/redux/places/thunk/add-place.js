import { THUNK_SERVER } from "../../server";
import { added } from "../actions";

const addPlace = (place) => {
  return async (dispatch) => {
    const response = await fetch(THUNK_SERVER + "places", {
      method: "POST",
      body: JSON.stringify({
        ...place,
        comments: [],
        reviews: [],
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const newPlace = await response.json();
    if (newPlace.insertedId) {
      alert('new Place added');
    }
     dispatch(added(newPlace));
  };
};

export default addPlace;
