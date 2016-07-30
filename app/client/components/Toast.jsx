import React from 'react';

export const Toast = props => {
  const rawType = props.type.split('-')[1];
  const type = `${rawType.substr(0,1).toUpperCase()}${rawType.substr(1)}`;
  return (
    <div className={`alert ${props.type}`}><strong>{type}!</strong> {props.message}</div>
  )
};
