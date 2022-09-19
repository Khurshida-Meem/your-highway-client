import baseAPI from "../../base-api";
import { approved } from "../actions";

const approveBlog = (id, status) => {
  const updated = { status: status };
  return async (dispatch) => {
    baseAPI.put("blogs/"+id, updated).then(() => dispatch(approved(id, status)));
  };
};

export default approveBlog;
