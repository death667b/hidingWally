import React, {Component} from 'react';

export class Uploader extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  doUpload(event) {
    event.preventDefault();
    return this.props.showToast('err', 'No File Selected');
    // gonna have to do 'new FormData()'
    // const form = new FormData();
    // console.log(event.target.files);
    // if (event.target.files.length < 1){
    //   return this.props.showToast('err', 'No File Selected');
    // }
    // form.append('file', event.target.files[0]);
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