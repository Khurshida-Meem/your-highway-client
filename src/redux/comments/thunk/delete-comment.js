import { deleted } from "../actions";
import travelAPI from "../../base-api";

const deleteComment = (id) => {
  return async (dispatch) => {
    travelAPI.delete(`${"comments/" + id}`);
    dispatch(deleted(id));
  };
};

export default deleteComment;
