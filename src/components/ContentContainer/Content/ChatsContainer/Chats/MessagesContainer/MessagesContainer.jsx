import { connect } from 'react-redux';
import Messages from './Messages/Messages';

const mapStateToProps = function(state, ownProps) {
  const userId = ownProps.chat.userId;
  const userActiveId = state.users.find((user) => user.userActive).userData.id;

  return (
    {
      userId,
      userActiveId
    }
  );
}

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
