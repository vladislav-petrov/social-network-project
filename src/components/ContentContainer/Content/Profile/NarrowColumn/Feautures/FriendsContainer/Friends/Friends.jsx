import React from 'react';
import style from './Friends.module.css';
import FriendsAll from './FriendsAll/FriendsAll';
import FriendsOnline from './FriendsOnline/FriendsOnline';

class Friends extends React.Component {
  render() {
    return (
      <div className={style.Friends}>
        <FriendsAll
          friends={this.props.friendsAll}
        />
        <FriendsOnline
          friends={this.props.friendsOnline}
        />
      </div>
    );
  }
}

export default Friends;
