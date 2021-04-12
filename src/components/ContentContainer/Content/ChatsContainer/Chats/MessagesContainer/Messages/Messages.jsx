import React from 'react';
import style from './Messages.module.css';
import MessagesList from './MessagesList/MessagesList';
import FormContainer from '../../../../General/FormContainer/FormContainer';

class Messages extends React.Component {
  render() {
    return (
      <div className={style.Messages}>
        <MessagesList
          chat={this.props.chat}
        />
        <div className={style.Messages_Form}>
          <FormContainer
            type='MessagesForm'
            userId={this.props.userId}
            userActiveId={this.props.userActiveId}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}

export default Messages;
