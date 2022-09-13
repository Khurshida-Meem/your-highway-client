import { FETCH_REVIEWS_FAIL, FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS } from "./action-types";

const initialState = {
  loading: false,
  data: [],
  error: "",
  review: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_REVIEWS_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
