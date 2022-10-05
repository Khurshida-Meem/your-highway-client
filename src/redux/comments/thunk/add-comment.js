import { added } from "../actions";
import travelAPI from "../../base-api";

const addComment = (comment) => {
  return async (dispatch) => {
    travelAPI.post("comments", comment);
    dispatch(added(comment));
  };
};

export default addComment;
