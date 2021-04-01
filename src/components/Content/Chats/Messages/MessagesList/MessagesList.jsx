import React from 'react';
import style from './MessagesList.module.css';
import MessageContainer from './MessageContainer/MessageContainer';

class MessagesList extends React.Component {
  _getMessages() {
    const userActive = this.props.store.getState().users.find((user) => user.userData.id === this.props.userActiveId);
    const messages = userActive.chatsData.chats.find((chat) => chat.userId === this.props.userId).messagesData.messages;
    return messages;
  }

  render() {
    const messages = this._getMessages();

    return (
      <div className={style.MessagesList}>
        {
          messages.map((message) => {
            return (
              <MessageContainer
                key={message.id}
                messageData={message}
                // userId={this.props.userId}
                // userActiveId={this.props.userActiveId}
                store={this.props.store}
              />
            );
          })
        }
      </div>
    );
  }
}

export default MessagesList;
