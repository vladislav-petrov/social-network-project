import classes from './Chats.module.css';
import Person from './Person/Person';
import Hint from '../General/Hint/Hint';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';

const Chats = function(props) {
  const user = props.state.users.find((user) => user.userActive);

  return (
    <div className={classes.Chats}>
      <div className={classes.Chats_Persons}>
        {
          user.chatsData.chats.length ? (
            user.chatsData.chats.map((chat) => {
              const person = props.state.users.find((user) => user.userData.id === chat.personId);

              return (
                <Person
                  key={person.userData.id}
                  id={person.userData.id}
                  imageURL={person.userData.imageURL}
                  imageAlt={person.userData.imageAlt}
                  name={`${person.userData.firstName} ${person.userData.lastName}`}
                />
              );
            })
          ) : (
            <Hint
              text="You don't have any chats yet"
            />
          )
        }
      </div>
      {
        user.chatsData.chats.length ? (
          <div className={classes.Chats_Messages}>
            <Route
              exact path="/chats"
              render={(propsRoute) => <Hint {...propsRoute}
                text="Select a chat to start messaging"
              />}
            />
            {
              user.chatsData.chats.map((chat) => {
                return (
                  <Route
                    key={chat.id}
                    exact path={`/chats/id${chat.personId}`}
                    render={(propsRoute) => <Messages {...propsRoute}
                      user={user}
                      person={props.state.users.find((user) => user.userData.id === chat.personId)}
                      messagesData={chat.messagesData}
                      addMessage={props.addMessage}
                    />}
                  />
                );
              })
            }
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  );
}

export default Chats;
