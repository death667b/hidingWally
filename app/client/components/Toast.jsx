import React from 'react';

export const Toast = props => (
  <div className={props.type}>{props.message}</div>
);
