import React, { PropTypes } from 'react';

export const Toast = props => {
  // SELF DESTRUCT
  setTimeout(
    () => props.delToast(props.toast.timeStamp),
    props.toast.timeOut
  );

  return (
    <div className={`alert ${props.toast.type}`}>
      <strong>Info!</strong><p>{props.toast.message}</p>
    </div>
  );
};

Toast.propTypes = {
  toast: PropTypes.object,
  delToast: PropTypes.func,
};
