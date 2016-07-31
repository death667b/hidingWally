/**
 * contains all the actions bound to the react components
 */

export const next = () => ({
  type: 'NEXT',
});

export const back = () => ({
  type: 'BACK',
});

export const restart = () => ({
  type: 'RESTART',
});

export const addSuccessToast = (message, timeOut = 3000) => ({
  type: 'ADD_TOAST',
  value: {
    type: 'alert-success', message, timeOut,
    timeStamp: Date.now(),
  },
});

export const addInfoToast = (message, timeOut = 3000) => ({
  type: 'ADD_TOAST',
  value: {
    type: 'alert-info', message, timeOut,
    timeStamp: Date.now(),
  },
});

export const addWarningToast = (message, timeOut = 3000) => ({
  type: 'ADD_TOAST',
  value: {
    type: 'alert-warning', message, timeOut,
    timeStamp: Date.now(),
  },
});

export const addDangerToast = (message, timeOut = 3000) => ({
  type: 'ADD_TOAST',
  value: {
    type: 'alert-danger', message, timeOut,
    timeStamp: Date.now(),
  },
});

export const delToast = timeStamp => ({
  type: 'DEL_TOAST',
  value: timeStamp,
});

export const setTransformData = data => ({
  type: 'SET_TRANSFORM_DATA',
  value: data,
});

export const asyncSendFile = (file, onSuccess, onFailure) => (
  dispatch => {
    const form = new FormData();
    form.append('file', file);

    fetch('/upload', { method: 'POST', body: form })
      .then(res => {
        if (!res.ok) {
          return onFailure();
        }
        return res.json()
          .then(data => {
            dispatch(setTransformData(data));
            dispatch(next());
            return onSuccess();
          });
      })
      .catch(error => {
        console.log(error.message);
        return onFailure();
      });
  }
);
