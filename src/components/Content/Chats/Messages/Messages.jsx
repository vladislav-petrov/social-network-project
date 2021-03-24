import classes from './Messages.module.css';
import Message from './Message/Message';
import Form from './Form/Form';

const Messages = function(props) {
  return (
    <div className={classes.Messages}>
      <div className={classes.Messages_List}>
        {
          props.messagesData.messages.map((message) => {
            const author = props.user.userData.id === message.authorId ? props.user : props.person;

            return (
              <Message
                key={message.id}
                imageURL={author.userData.imageURL}
                imageAlt={author.userData.imageAlt}
                name={author.userData.firstName}
                date={message.date}
                text={message.text}
              />
            );
          })
        }
      </div>
      <div className={classes.Messages_Form}>
        <Form
          user={props.user}
          person={props.person}
          addMessage={props.addMessage}
        />
      </div>
    </div>
  );
}

export default Messages;
