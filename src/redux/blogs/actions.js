import { ADD_BLOGS, APPROVE_BLOG, DELETE_BLOGS, FETCH_BLOGS, UPDATE_BLOGS } from "./action-types";

export const loaded = (data) => {
  return {
    type: FETCH_BLOGS,
    payload: data,
  };
};

export const added = (data) => {
  return {
    type: ADD_BLOGS,
    payload: data,
  };
};

export const approved = (id, status) => {
  return {
    type: APPROVE_BLOG,
    payload: {id, status},
  };
};

export const deleted = (id) => {
  return {
    type: DELETE_BLOGS,
    payload: id,
  };
};
export const updated = (id, blog) => {
  return {
    type: UPDATE_BLOGS,
    payload: { id, blog },
  };
};

