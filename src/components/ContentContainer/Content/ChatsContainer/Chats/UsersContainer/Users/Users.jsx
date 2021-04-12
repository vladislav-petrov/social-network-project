import React from 'react';
import style from './Users.module.css';
import User from './User/User';
import Hint from '../../../../General/Hint/Hint';

class Users extends React.Component {
  render() {
    return (
      <div className={style.Users}>
        {
          this.props.chats.length ? (
            this.props.users.map((user) => {
              return (
                <User
                  key={user.userData.id}
                  id={user.userData.id}
                  imageURL={user.userData.imageURL}
                  imageAlt={user.userData.imageAlt}
                  name={`${user.userData.firstName} ${user.userData.lastName}`}
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
