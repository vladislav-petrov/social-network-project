import React from 'react';
import { Route } from 'react-router-dom';
import style from './Chats.module.css';
import Users from './Users/Users';
import Hint from '../General/Hint/Hint';
import Messages from './Messages/Messages';

class Chats extends React.Component {
  _getUserActiveId() {
    return this.props.store.getState().users.find((user) => user.userActive).userData.id;
  }

  _getChats() {
    const userActive = this.props.store.getState().users.find((user) => user.userData.id === this._getUserActiveId());
    const chats = userActive.chatsData.chats;

    return chats;
  }

  render() {
    const chats = this._getChats();

    return (
      <div className={style.Chats}>
        <Users
          chats={chats}
          userActiveId={this._getUserActiveId()}
          store={this.props.store}
        />
        {
          chats.length ? (
            <div className={style.Chats_Messages}>
              <Route
                exact path='/chats'
                render={(propsRoute) => <Hint {...propsRoute}
                  text="Select a chat to start messaging"
                />}
              />
              {
                chats.map((chat) => {
                  return (
                    <Route
                      key={chat.id}
                      exact path={`/chats/id${chat.userId}`}
                      render={(propsRoute) => <Messages {...propsRoute}
                        userId={chat.userId}
                        userActiveId={this._getUserActiveId()}
                        store={this.props.store}
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
}

export default Chats;
