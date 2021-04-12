import React from 'react';
import style from './NetworkStatus.module.css';

class NetworkStatus extends React.Component {
  render() {
    return (
        <div className={style.NetworkStatus}>
          {this.props.networkStatus}
        </div>
    );
  }
}

export default NetworkStatus;
