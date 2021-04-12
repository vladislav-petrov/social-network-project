import { connect } from 'react-redux';
import Chats from './Chats/Chats';

const mapStateToProps = function(state) {
  const chats = state.users.find((user) => user.userActive).chatsData.chats;

  return (
    {
      chats
    }
  );
}

const ChatsContainer = connect(mapStateToProps)(Chats);

export default ChatsContainer;
