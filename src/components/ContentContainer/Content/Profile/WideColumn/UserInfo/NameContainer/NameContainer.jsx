import { connect } from 'react-redux';
import Name from './Name/Name';

const mapStateToProps = function(state) {
  const userData = state.users.find((user) => user.userData.id === state.goToId).userData;
  const name = `${userData.firstName} ${userData.lastName}`;

  return (
    {
      name
    }
  );
}

const NameContainer = connect(mapStateToProps)(Name);

export default NameContainer;
