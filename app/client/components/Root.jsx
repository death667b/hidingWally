import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../logic/actions';

import { Upload } from './Upload';
import { Transform } from './Transform';
import { Toast } from './Toast';

export const RootComponent = props => {
  /**
   * renders the current activity
   * @return {Element} the current activity element.
   */
  const renderActivity = () => {
    switch (props.activities[0]) {
      case 'upload':
        return <Upload {...props} />;
      case 'transform':
        return <Transform {...props} />;
      // case 'complete':
      //   return <Complete />;
      default:
        return <Upload {...props} />;
    }
  };

  return (
    <div className="root">

      {/**
       * activities are shown here
       */
        props.activities.length > 0 ?
          renderActivity() : props.restart()
      }

      {/**
       * toasts are shown here
       */
        props.toasts.map(
          (toast, index) => <Toast key={index} toast={toast} {...this.props} />
        )
      }
    </div>
  );
};

RootComponent.propTypes = {
  toasts: PropTypes.array,
  activities: PropTypes.array,
  restart: PropTypes.func,
};

const mapPropsToState = STATE => ({
  activities: STATE.get('activities').toJS(),
  toasts: STATE.get('toasts').toJS(),
  transformData: STATE.get('transformData'),
});

export const Root = connect(mapPropsToState, actions)(RootComponent);
