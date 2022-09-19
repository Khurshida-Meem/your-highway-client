import baseAPI from "../../base-api";
import { updated } from "../actions";

const updatePlace = (id, data) => {
  return async (dispatch) => {
    baseAPI.put("places/" + id, data).then(() => dispatch(updated(id, data)));
  };
};

export default updatePlace;
