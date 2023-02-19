import { LENGUAGES } from './actionsTypes';

export function changeLenguage(payload) {
  return {
    type: LENGUAGES,
    payload: payload,
  };
}
