import { THUNK_SERVER } from "../../server";
import { deleted } from "../actions";

const deleteBlog = (id) => {
  return async (dispatch) => {
    await fetch(THUNK_SERVER + `${"blogs/" + id}`, {
      method: "DELETE",
    });

    dispatch(deleted(id));
  };
};

export default deleteBlog;
