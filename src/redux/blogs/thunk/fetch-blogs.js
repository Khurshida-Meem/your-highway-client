import { THUNK_SERVER } from "../../server";
import {loaded} from '../actions'

const fetchBlogs = async (dispatch) => {
  const response = await fetch(THUNK_SERVER+'blogs');
  const blogs = await response.json();

  dispatch(loaded(blogs));
};

export default fetchBlogs;
