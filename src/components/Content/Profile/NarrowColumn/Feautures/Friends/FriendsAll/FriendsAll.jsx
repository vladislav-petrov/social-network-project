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
                // userId={this.props.userId}
                // userActiveId={this.props.userActiveId}
                friendData={friend.userData}
                store={this.props.store}
              />
            );
          })
        }
      </div>
    );
  }
}

export default FriendsAll;
