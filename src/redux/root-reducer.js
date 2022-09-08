import { combineReducers } from "redux";
import placesReducer from "./reducers/places-reducer";
import reviewsReducer from "./reducers/reviews-reducer";


const rootReducer = combineReducers({
    places: placesReducer,
    reviews: reviewsReducer,
});

export default rootReducer;