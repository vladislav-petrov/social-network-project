import React from 'react';
import NetworkStatus from './NetworkStatus/NetworkStatus';

class NetworkStatusContainer extends React.Component {
  _getNetworkStatus() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return user.networkStatus;
  }

  render() {
    return (
      <NetworkStatus
        networkStatus={this._getNetworkStatus()}
      />
    );
  }
}

export default NetworkStatusContainer;
