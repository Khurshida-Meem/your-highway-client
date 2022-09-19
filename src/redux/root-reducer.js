import { combineReducers } from "redux";
import reviewsReducer from "./reviews/reducers";
import placesReducer from "./places/reducers";
import blogsReducer from "./blogs/reducers";


const rootReducer = combineReducers({
  places: placesReducer,
  reviews: reviewsReducer,
  blogs: blogsReducer,
});

export default rootReducer;