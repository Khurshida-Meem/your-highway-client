import { combineReducers } from "redux";
import placesReducer from "./reducers/places-reducer";


const rootReducer = combineReducers({
    places: placesReducer,
});

export default rootReducer;