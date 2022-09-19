import { ADD_BLOGS, DELETE_BLOGS, FETCH_BLOGS, UPDATE_BLOGS } from "./action-types";

const initialState = {
  blogs: [],
  category: "All",
  searchKey: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOGS:
      return {
        ...state,
        blogs: [...state.places, action.payload],
      };
    case DELETE_BLOGS:
      return {
        ...state,
        blogs: state.places.filter((place) => place._id !== action.payload),
      };
    
    default:
      return state;
  }
};

export default reducer;
