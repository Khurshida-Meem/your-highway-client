import { THUNK_SERVER } from "../../server";
import {loaded} from '../actions'

const fetchPlaces = async (dispatch) => {
  const response = await fetch(THUNK_SERVER+'places');
  const places = await response.json();

  dispatch(loaded(places));
};

export default fetchPlaces;
