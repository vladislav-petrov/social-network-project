import React from 'react';
import { Route } from 'react-router-dom';
import style from './Chats.module.css';
import UsersContainer from './UsersContainer/UsersContainer';
import Hint from '../../General/Hint/Hint';
import MessagesContainer from './MessagesContainer/MessagesContainer';

class Chats extends React.Component {
  render() {
    return (
      <div className={style.Chats}>
        <UsersContainer
          chats={this.props.chats}
        />
        {
          this.props.chats.length ? (
            <div className={style.Chats_Messages}>
              <Route
                exact path='/chats'
                render={
                  (propsRoute) => {
                    return (
                      <Hint
                        {...propsRoute}
                        text="Select a chat to start messaging"
                      />
                    );
                  }
                }
              />
              {
                this.props.chats.map((chat) => {
                  return (
                    <Route
                      key={chat.id}
                      exact path={`/chats/id${chat.userId}`}
                      render={
                        (propsRoute) => {
                          return (
                            <MessagesContainer
                              {...propsRoute}
                              chat={chat}
                            />
                          );
                        }
                      }
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
}

export default Chats;
