import { connect } from 'react-redux';
import NetworkStatus from './NetworkStatus/NetworkStatus';

const mapStateToProps = function(state) {
  const networkStatus = state.users.find((user) => user.userData.id === state.goToId).networkStatus;

  return (
    {
      networkStatus
    }
  );
}

const NetworkStatusContainer = connect(mapStateToProps)(NetworkStatus);

export default NetworkStatusContainer;
