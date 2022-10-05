import { THUNK_SERVER } from "../../server";
import {loaded} from '../actions'

const fetchComments = async (dispatch) => {
  const response = await fetch(THUNK_SERVER+'comments');
  const comments = await response.json();

  dispatch(loaded(comments));
};

export default fetchComments;
