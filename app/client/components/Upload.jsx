import React from 'react';

import { Uploader } from './Uploader';

export const Upload = props => (
  <div className="upload-activity">
    <div className='jumbotron'>
      <div className='row'>
        <div className='col-xs-12'><h1 className='display-3'>DAAASGÜD</h1></div>
        <div className='col-xs-12'>
          <p className='lead text center'>
            is a toolkit for data anonymisation. It lets you choose what
            you want to anonymise and to what granularity.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <img src="/favi/binary2.jpg" alt="Anon" />
    </div>
    <div className="col-xl-8">
      <Uploader {...props} />
    </div>
  </div>
);
