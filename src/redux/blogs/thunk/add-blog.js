import { THUNK_SERVER } from "../../server";
import { added } from "../actions";

const addBlog = (blog) => {
  return async (dispatch) => {
    const response = await fetch(THUNK_SERVER + "blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const newBlog = await response.json();
    if (newBlog.insertedId) {
      alert('new Place added');
    }
     dispatch(added(newBlog));
  };
};

export default addBlog;
