import React, { Component } from 'react';

export class Toast extends Component {

  constructor(props) {
    super(props);
    this.message = this.props.message;
    this.alertType = this.props.type;
    this.type = `${rawType.substr(0,1).toUpperCase()}${rawType.substr(1)}`;
    this.timeOut = this.props.timeOut || 2000;
  }

  componentWillMount() {
    this.timer = setTimeout(() => this.props.clearToast(), this.timeOut);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className={`alert ${this.alertType}`}><strong>{this.type}!</strong> {this.message}</div>
    )
  }

}
