import React from 'react';

import { Uploader } from './Uploader';

export const Upload = props => (
  <div className="upload-activity">
    <div className="col-xl-4">
      <img src="/favi/binary2.jpg" alt="Anon" />
    </div>
    <div className="col-xl-8">
      <Uploader {...props} />
    </div>
  </div>
);
