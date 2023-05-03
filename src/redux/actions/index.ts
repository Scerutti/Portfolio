import { LENGUAGES } from './actionsTypes';

export function changeLenguage(payload: boolean) {
  return {
    type: LENGUAGES,
    payload: payload,
  };
}
