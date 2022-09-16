import { FETCH_PLACES, PLACES_SEARCH } from "./action-types";

const initialState = {
  places: [],
  country: 'All',
  searchKey: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case PLACES_SEARCH:
      return {
        ...state,
        searchKey: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
