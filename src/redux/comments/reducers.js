import { ADD_COMMENTS, DELETE_COMMENTS, FETCH_COMMENTS } from "./action-types";

const initialState = {
  comments: [],
  commentsByEmail: [],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE_COMMENTS:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment._id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
