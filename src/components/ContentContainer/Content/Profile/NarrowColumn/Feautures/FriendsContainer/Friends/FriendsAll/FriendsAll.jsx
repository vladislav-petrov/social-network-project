import React from 'react';
import style from './FriendsAll.module.css';
import FriendContainer from '../General/FriendContainer/FriendContainer';

class FriendsAll extends React.Component {
  render() {
    return (
      <div className={style.FriendsAll}>
        <span className={style.FriendsAll_Header}>
          Friends {this.props.friends.length}
        </span>
        {
          this.props.friends.map((friend) => {
            return (
              <FriendContainer
                key={friend.userData.id}
                id={friend.userData.id}
                imageURL={friend.userData.imageURL}
                imageAlt={friend.userData.imageAlt}
                firstName={friend.userData.firstName}
              />
            );
          })
        }
      </div>
    );
  }
}

export default FriendsAll;
