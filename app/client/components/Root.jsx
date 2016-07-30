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
    this.clearToast = this.clearToast.bind(this);
  }

  showToast(type, message) {
    this.setState({
      toast: {
        type,
        message,
      }
    });
  }

  clearToast() {
    this.setState({
      toast: null,
    })
  }

  getToast(){
    if (this.state.toast){
      const toast = this.state.toast;
      // this.setState({ toast: null });
      setTimeout(() => this.clearToast(), 3000);
      return <Toast clear={this.clearToast} type={toast.type} message={toast.message} />
    }
  }

  render() {
    return (
      <div className="root">
        {this.getToast()}
        <Uploader showToast={this.showToast}/>
      </div>
    )
  }
}