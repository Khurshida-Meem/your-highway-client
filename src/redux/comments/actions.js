import { ADD_COMMENTS, DELETE_COMMENTS, FETCH_COMMENTS } from "./action-types";

export const loaded = (data) => {
  return {
    type: FETCH_COMMENTS,
    payload: data,
  };
};

export const added = (data) => {
  return {
    type: ADD_COMMENTS,
    payload: data,
  };
};

export const deleted = (id) => {
  return {
    type: DELETE_COMMENTS,
    payload: id,
  };
};


