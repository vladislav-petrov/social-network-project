import React from 'react';
import style from './Users.module.css';
import UserContainer from './UserContainer/UserContainer';
import Hint from '../../General/Hint/Hint';

class Users extends React.Component {
  _getUsers() {
    const chats = this.props.chats;

    const users = chats.map((chat) => {
      const userId = chat.userId;
      const user = this.props.store.getState().users.find((user) => user.userData.id === userId);
  
      return user;
    });

    return users;
  }

  render() {
    const chats = this.props.chats;
    const users = this._getUsers();

    return (
      <div className={style.Users}>
        {
          chats.length ? (
            users.map((user) => {
              return (
                <UserContainer
                  key={user.userData.id}
                  user={user}
                  // userActiveId={this._getUserActiveId()}
                  // store={this.props.store}
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
    );
  }
}

export default Users;
