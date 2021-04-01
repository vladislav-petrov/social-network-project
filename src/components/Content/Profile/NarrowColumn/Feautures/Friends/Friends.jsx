import React from 'react';
import style from './Friends.module.css';
import FriendsAll from './FriendsAll/FriendsAll';
import FriendsOnline from './FriendsOnline/FriendsOnline';

class Friends extends React.Component {
  _createFriendsArray() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return user.friends.map((id) => this.props.store.getState().users.find((user) => user.userData.id === id));
  }

  _createFriendsAllArray() {
    return this._createFriendsArray().slice(0, 6);
  }

  _createFriendsOnlineArray() {
    return this._createFriendsArray().filter((friend) => friend.networkStatus === 'Online').slice(0, 6);
  }

  render() {
    return (
      <div className={style.Friends}>
        <FriendsAll
          // userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          friends={this._createFriendsAllArray()}
          store={this.props.store}
        />
        <FriendsOnline
          // userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          friends={this._createFriendsOnlineArray()}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default Friends;
