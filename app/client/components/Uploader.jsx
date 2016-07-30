import React, {Component} from 'react';

export class Uploader extends Component {

  doUpload(event) {
    event.preventDefault();
    // gonna have to do 'new FormData()'
    const form = new FormData();
    console.log(event.target.files);
    if (event.target.files.length < 1) {
      return this.props.showToast('alert-warning', 'No File Selected');
    }
    form.append('file', event.target.files[0]);
    fetch('/upload', {
      method: 'POST',
      body: form,
    })
      .then(res => {
        if (!res.ok) {
          return this.props.showToast('alert-warning', 'File has failed to upload.');
        }
        return this.props.showToast('alert-success', 'File has been uploaded!');
      })
  }

  render() {
    return (
      <div className="uploader">
        <h1>Choose A File</h1>
        <h3>The upload will begin automatically</h3>
        <input type="file" onChange={e => this.doUpload(e)} />
      </div>
    );
  }
}
