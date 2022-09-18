import baseAPI from '../../base-api'
import { updated } from '../actions';

const updatePlace = (id, data) => {
  return async (dispatch) => {
    // const response = await fetch(THUNK_SERVER + `${"/" + todoId}`, {
      baseAPI.put('places/'+id , data).then(() => dispatch(updated(id,data)))

    // dispatch(updateTitle(todo.id, todo.text));
  };
};

export default updatePlace;
