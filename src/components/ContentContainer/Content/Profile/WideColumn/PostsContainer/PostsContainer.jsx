import { connect } from 'react-redux';
import Posts from './Posts/Posts';

const mapStateToProps = function(state) {
  const userId = state.users.find((user) => user.userData.id === state.goToId).userData.id;
  const userActiveId = state.users.find((user) => user.userActive).userData.id;

  return (
    {
      userId,
      userActiveId
    }
  );
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
