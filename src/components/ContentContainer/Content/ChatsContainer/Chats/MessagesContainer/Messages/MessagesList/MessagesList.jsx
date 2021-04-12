import React from 'react';
import style from './MessagesList.module.css';
import MessageContainer from './MessageContainer/MessageContainer';

class MessagesList extends React.Component {
  render() {
    return (
      <div className={style.MessagesList}>
        {
          this.props.chat.messagesData.messages.map((message) => {
            return (
              <MessageContainer
                key={message.id}
                messageData={message}
              />
            );
          })
        }
      </div>
    );
  }
}

export default MessagesList;
