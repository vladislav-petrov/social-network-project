import { connect } from 'react-redux';
import Users from './Users/Users';

const mapStateToProps = function(state, ownProps) {
  const chats = ownProps.chats;

  const users = chats.map((chat) => {
    const userId = chat.userId;
    const user = state.users.find((user) => user.userData.id === userId);

    return user;
  });

  return (
    {
      users
    }
  );
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
