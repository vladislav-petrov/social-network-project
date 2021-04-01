import React from 'react';
import Message from './Message/Message';

class MessageContainer extends React.Component {
  _getAuthorData() {
    return this.props.store.getState().users.find((user) => user.userData.id === this.props.messageData.authorId).userData;
  }

  render() {
    const authorData = this._getAuthorData();

    return (
      <Message
        imageURL={authorData.imageURL}
        imageAlt={authorData.imageAlt}
        firstName={authorData.firstName}
        date={this.props.messageData.date}
        text={this.props.messageData.text}
      />
    );
  }
}

export default MessageContainer;
