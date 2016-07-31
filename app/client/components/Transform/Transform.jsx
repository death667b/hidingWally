import React, { PropTypes } from 'react';

export const Transform = props => {
  const data = props.transformData;

  // XXX: Print to console all transform data
  console.log(JSON.stringify(data));

  return (
    <div className="upload-activity">
      {
        data.columns.map((column, i) => (
          <div key={i}>
            <p>Column: {column.header}</p>
            <p>Types:</p>
            <ul>
              {
                column.transforms.type.map((type, j) => (
                  <li key={j}>{type}</li>
                ))
              }
            </ul>
            <p>Methods:</p>
            <ul>
              {
                column.transforms.methods.map((type, k) => (
                  <li key={k}>{type}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};


Transform.propTypes = {
  transformData: PropTypes.object,
};
