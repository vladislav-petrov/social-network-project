import { connect } from 'react-redux';
import Post from './Post/Post';

const mapStateToProps = function(state, ownProps) {
  const authorData = state.users.find((user) => user.userData.id === ownProps.postData.authorId).userData;

  return (
    {
      authorName: `${authorData.firstName} ${authorData.lastName}`,
      authorImageURL: authorData.imageURL,
      authorImageAlt: authorData.imageAlt,
      date: ownProps.postData.date,
      text: ownProps.postData.text,
      likes: ownProps.postData.likes
    }
  );
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;
