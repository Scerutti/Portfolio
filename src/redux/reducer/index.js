import { LENGUAGES } from '../actions/actionsTypes';

const initialState = { lenguage: false };

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LENGUAGES:
      if (payload) {
        return { ...state, lenguage: true };
      } else return { ...state, lenguage: false };
    default:
      return { ...state };
  }
}

export default rootReducer;
