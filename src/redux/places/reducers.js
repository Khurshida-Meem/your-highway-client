import {
  ADD_PLACE,
  DELETE_PLACE,
  FETCH_PLACES,
  PLACES_SEARCH,
  UPDATE_PLACE,
} from "./action-types";

const initialState = {
  places: [],
  country: "All",
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
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => place._id !== action.payload),
      }
      case UPDATE_PLACE:
        const {id, place} = action.payload;
        return {
          ...state,
          places: state.places.map(data => {
          if(data._id !== id) {
            return data;
          }
          return {
            ...data,
            destination: place.destination,
            country: place.country,
            cost: place.cost,
            thumb: place.thumb,
            description: place.description,
          };
        })
        }
    default:
      return state;
  }
};

export default reducer;
