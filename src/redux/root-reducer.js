import { combineReducers } from "redux";
import reviewsReducer from "./reviews/reducers";
import placesReducer from "./places/reducers";
import blogsReducer from "./blogs/reducers";
import commentsReducer from "./comments/reducers"


const rootReducer = combineReducers({
  places: placesReducer,
  reviews: reviewsReducer,
  blogs: blogsReducer,
  comments: commentsReducer,
});

export default rootReducer;