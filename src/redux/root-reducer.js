import { combineReducers } from "redux";
import reviewsReducer from "./reviews/reducers";
import placesReducer from "./places/reducers";


const rootReducer = combineReducers({
  places: placesReducer,
  reviews: reviewsReducer,
});

export default rootReducer;