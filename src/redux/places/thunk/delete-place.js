import { THUNK_SERVER } from "../../server";
import { deleted } from "../actions";

const deletePlace = (id) => {
  return async (dispatch) => {
    await fetch(THUNK_SERVER + `${"places/" + id}`, {
      method: "DELETE",
    });

    dispatch(deleted(id));
  };
};

export default deletePlace;
