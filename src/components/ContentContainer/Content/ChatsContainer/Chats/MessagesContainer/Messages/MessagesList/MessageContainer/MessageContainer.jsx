import { connect } from 'react-redux';
import Message from './Message/Message';

const mapStateToProps = function(state, ownProps) {
  const authorData = state.users.find((user) => user.userData.id === ownProps.messageData.authorId).userData;

  return (
    {
      authorFirstName: authorData.firstName,
      authorImageURL: authorData.imageURL,
      authorImageAlt: authorData.imageAlt,
      date: ownProps.messageData.date,
      text: ownProps.messageData.text
    }
  );
}

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;
