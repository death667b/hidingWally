import React, {Component} from 'react';
import { Uploader } from './Uploader';
import { Toast } from './Toast';

export class Root extends Component {

  constructor() {
    super();
    this.state = {
      toast: null,
    };
    this.showToast = this.showToast.bind(this);
  }

  showToast(type, message){
    this.setState({
      toast: {
        type,
        message,
      }
    });
  }

  getToast(){
    if (this.state.toast){
      const toast = this.state.toast;
      this.setState({ toast: null });
      return <Toast type={toast.type} message={toast.message} />
    }
  }

  render() {
    return (
      <div className="root">
        {this.getToast()}
        <Uploader showToast={e => this.showToast()}/>
      </div>
    )
  }
}