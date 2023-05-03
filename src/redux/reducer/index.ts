import { LENGUAGES } from '../actions/actionsTypes';
import { LenguageState } from './types';

const initialState: LenguageState = { lenguage: false };

function rootReducer(
  state: LenguageState = initialState,
  { type, payload }: { type: string; payload: boolean }
): LenguageState {
  switch (type) {
    case LENGUAGES:
      if (payload) {
        return { ...state, lenguage: true };
      } else {
        return { ...state, lenguage: false };
      }
    default:
      return { ...state };
  }
}

export default rootReducer;
