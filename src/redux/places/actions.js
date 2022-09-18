import { ADD_PLACE, DELETE_PLACE, FETCH_PLACES, PLACES_SEARCH } from "./action-types";

export const loaded = (data) => {
  return {
    type: FETCH_PLACES,
    payload: data,
  };
};

export const added = (data) => {
  return {
    type: ADD_PLACE,
    payload: data,
  }
}
export const deleted = (id) => {
  return {
    type: DELETE_PLACE,
    payload: id,
  }
}

export const searchKey = (key) => {
  return {
    type: PLACES_SEARCH,
    payload: key,
  };
};


