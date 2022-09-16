import { FETCH_PLACES } from "./action-types";

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
        places: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
