import React, {Component} from 'react';
import { Uploader } from './Uploader';
import { Toast } from './Toast';

export class Root extends Component {

  constructor() {
    super();
    this.state = {
      toasts: [],
    };
    this.showToast = this.showToast.bind(this);
    this.clearToast = this.clearToast.bind(this);
  }

  showToast(type, message, timeOut) {
    const toasts = this.state.toasts;
    toasts.push({
      type,
      message,
      timeOut,
      timeStamp: Date.now()
    });
    this.setState({
      toasts,
    });
  }

  clearToast(timeStamp) {
    // keep toasts with a different timestamp only
    const toasts = this.state.toasts.filter(toast => (toast.timeStamp !== timeStamp));
    this.setState({
      toasts,
    });
  }

  getToasts(){
    const toasts = [];
    this.state.toasts.forEach(toast => {
      toasts.push(<Toast key={toast.timeStamp} {...toast} clearToast={this.clearToast} />);
    });
    return toasts;
  }

  render() {
    return (
      <div className="root">
        <div className="row">
          <div className="col-xl-4">
            <img src="/favi/android-icon-192x192.png" alt="Anon"/>
          </div>
          <div className="col-xl-8">
            {this.getToasts()}
            <Uploader showToast={this.showToast}/>
          </div>
        </div>
      </div>
    )
  }
}