import { THUNK_SERVER } from "../../server";
import { added } from "../actions";

const addComment = (comment) => {
  return async (dispatch) => {
    const response = await fetch(THUNK_SERVER + "comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const newComment = await response.json();
    
     dispatch(added(newComment));
  };
};

export default addComment;
