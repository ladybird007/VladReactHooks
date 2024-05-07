import { SHOW_ALERT, HIDE_ALERT } from '../types';

// reducer without handler
/*export const alertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT: return action.payload
    case HIDE_ALERT: return null
    default: return state
  }
}*/

// reducer with handler
const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () =>  null,
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}