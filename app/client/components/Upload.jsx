import React from 'react';

import { Uploader } from './Uploader';

export const Upload = props => (
  <div className="container">
    <div className="upload-activity">
      <div className="row">
        <div className='jumbotron'>
          <div className='col-xs-12'><h1 className='display-3'>DAAASGÜD</h1></div>
          <div className='col-xs-12'>
            <p className='lead text-center'>
              is a toolkit for data anonymisation. It lets you choose what
              you want to anonymise and to what granularity.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-xl-5">
            <img src="/favi/binary2.jpg" alt="Obscured Binary" />
          </div>
          <div className="col-xl-7">
            <Uploader {...props} />
          </div>
      </div>
    </div>
  </div>
);
