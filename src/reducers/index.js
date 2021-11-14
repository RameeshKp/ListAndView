import {GET_LIST, SET_LOADER,} from '../actions/type';
const initialState = {
  itemsList: [],
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, itemsList: action.payload};
    case SET_LOADER:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
};
