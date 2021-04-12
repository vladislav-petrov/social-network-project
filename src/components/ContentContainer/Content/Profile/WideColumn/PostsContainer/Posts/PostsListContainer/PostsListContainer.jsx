import { connect } from 'react-redux';
import PostsList from './PostsList/PostsList';

const mapStateToProps = function(state) {
  const user = state.users.find((user) => user.userData.id === state.goToId);
  const posts = user.postsData.posts;

  return (
    {
      posts
    }
  );
}

const PostsListContainer = connect(mapStateToProps)(PostsList);

export default PostsListContainer;
