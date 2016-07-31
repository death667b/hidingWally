import React, { Component } from 'react';

export class kScoreDisplay extends Component {
  render() {
    return (
      <div className={`alert ${this.alertType}`}><strong>{this.type}!</strong> {this.message}</div>
    )
  }

}
