import React, { Component, PropTypes } from 'react';

export class Uploader extends Component {

  doUpload(event) {
    event.preventDefault();

    if (event.target.files.length < 1) {
      return this.props.addWarningToast('No File Selected');
    }

    return this.props.asyncSendFile(
      event.target.files[0],
      () => this.props.addSuccessToast('File has been uploaded!'),
      () => this.props.addWarningToast('File has failed to upload.', 10000)
    );
  }

  render() {
    return (
      <div className="uploader">
        <h1>Choose A File</h1>
        <h3>The upload will begin automatically</h3>
        <input type="file" onChange={event => this.doUpload(event)} />
      </div>
    );
  }
}

Uploader.propTypes = {
  asyncSendFile: PropTypes.func,
  addSuccessToast: PropTypes.func,
  addWarningToast: PropTypes.func,
};
