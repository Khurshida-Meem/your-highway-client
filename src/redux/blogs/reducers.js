import {
  ADD_BLOGS,
  APPROVE_BLOG,
  DELETE_BLOGS,
  FETCH_BLOGS,
  UPDATE_BLOGS,
} from "./action-types";

const initialState = {
  blogs: [],
  blogsByEmail: [],
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
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOGS:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case APPROVE_BLOG:
      const { id, status } = action.payload;
      return {
        ...state,
        blogs: state.blogs.map((data) => {
          if (data._id !== id) {
            return data;
          }
          return {
            ...data,
            status: status,
          };
        }),
      };

    default:
      return state;
  }
};

export default reducer;
