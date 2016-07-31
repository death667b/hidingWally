import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../logic/actions';

import { Upload } from './Upload';
import { Toast } from './Toast';

export class RootComponent extends Component {

  renderActivity() {
    switch (this.props.activities[0]) {
      case 'upload':
        return <Upload />;
      // case 'transform':
      //   return <Transform />;
      // case 'complete':
      //   return <Complete />;
      default:
        return <Upload />;
    }
  }

  render() {
    return (
      <div className="root">

        /**
         * activities are shown here
         */
        {
          this.props.activites.length > 0 ?
            () => this.renderActivity() : () => this.props.restart()
        }

        /**
         * toasts are shown here
         */
        {
          this.props.toasts.map(
            (toast, index) => <Toast key={index} props={toast} />
          )
        }
      </div>
    );
  }
}

RootComponent.propTypes = {
  toasts: PropTypes.array,
  activities: PropTypes.array,
  restart: PropTypes.func,
};

const mapPropsToState = STATE => ({
  activities: STATE.get('activities').toJS(),
  toasts: STATE.get('toasts').toJS(),
});

export const Root = connect(mapPropsToState, actions)(RootComponent);
