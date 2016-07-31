import * as core from './core';

/**
 * filters actions sent from react, and parses their data to correct core
 * operator.
 */

export const reducer = (STATE = core.DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NEXT':
      return core.next(STATE);
    case 'RESTART':
      return core.restart(STATE);
    case 'ADD_TOAST':
      return core.addToast(STATE, action.value);
    case 'DEL_TOAST':
      return core.delToast(STATE, action.value);
    default:
      return STATE;
  }
};
