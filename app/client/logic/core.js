import { Map, List } from 'immutable';

/**
 * the core operations on the applications state
 */

export const DEFAULT_STATE = new Map({
  activities: new List(['upload', 'transform', 'complete']),
  toasts: new List(),
});

export const next = STATE => (
  STATE.update('activities', list => list.shift())
);

export const restart = STATE => (
  STATE.set('activities', new List(['upload', 'transform', 'complete']))
);

export const addToast = (STATE, toast) => (
  STATE.update('toasts', toasts => toasts.push(toast))
);

export const delToast = (STATE, timeStamp) => (
  STATE.update('toasts',
    toasts => toasts.delete(
      toasts.findKey(toast => toast.timeStamp === timeStamp)
    )
  )
);

export const setTransformData = (STATE, data) => (
  STATE.set('transformData', data)
);
