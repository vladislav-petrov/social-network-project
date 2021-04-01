import React from 'react';
import style from './FriendsOnline.module.css';
import FriendContainer from '../General/FriendContainer/FriendContainer';

class FriendsOnline extends React.Component {
  render() {
    return (
      <div className={style.FriendsOnline}>
        <span className={style.FriendsOnline_Header}>
          Friends online {this.props.friends.length}
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

export default FriendsOnline;
