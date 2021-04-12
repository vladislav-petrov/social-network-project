import { connect } from 'react-redux';
import UserImage from './UserImage/UserImage';

const mapStateToProps = function(state) {
  const userData = state.users.find((user) => user.userData.id === state.goToId).userData;
  const { imageURL } = userData;
  const { imageAlt } = userData;

  return {
    imageURL,
    imageAlt
  };
}

const UserImageContainer = connect(mapStateToProps)(UserImage);

export default UserImageContainer;
