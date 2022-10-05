import { THUNK_SERVER } from "../../server";
import { deleted } from "../actions";

const deleteComment = (id) => {
  return async (dispatch) => {
    await fetch(THUNK_SERVER + `${"comments/" + id}`, {
      method: "DELETE",
    });

    dispatch(deleted(id));
  };
};

export default deleteComment;
