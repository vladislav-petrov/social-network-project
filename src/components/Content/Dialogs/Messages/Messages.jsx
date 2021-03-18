// import classes from './Messages.module.css';
import Message from './Message/Message';
import Form from './Form/Form';

const Messages = function(props) {
  return (
    <div>
      {
        props.messages.map((message, index) => {
          const authorData = message.id === '1' ? props.userData : props.friendData;

          return (
            <Message
              key={(index + 1).toString()}
              imageURL={authorData.imageURL}
              imageAlt={authorData.imageAlt}
              name={authorData.firstName}
              date={message.date}
              text={message.text}
            />
          );
        })
      }
      <Form />
    </div>
  );
}

export default Messages;
