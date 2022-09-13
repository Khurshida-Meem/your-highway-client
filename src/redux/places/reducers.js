import { FETCH_PLACES_FAIL, FETCH_PLACES_START, FETCH_PLACES_SUCCESS } from "./action-types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLACES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PLACES_FAIL:
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
