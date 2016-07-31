import React, { PropTypes } from 'react';

export const Transform = props => {
  const data = props.transformData;

  return (
    <div className="upload-activity">
      <p>{console.log(JSON.stringify(data))}</p>
      {
        data.columns.map((column, index) => (
          <div key={index}>
            {
              Object.keys(column).map(key => (
                <div key={key}>
                  <p>Column: {key}</p>
                  <p>Type: {key[0].type}</p>
                  <p>Methods: {key[0].methods}</p>
                  <ul>
                  </ul>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};


Transform.propTypes = {
  transformData: PropTypes.object,
};
