import React from 'react';
import classes from './Profile.module.css';
import NarrowColumn from './NarrowColumn/NarrowColumn';
import WideColumn from './WideColumn/WideColumn';

class Profile extends React.Component {
  _getUserId() {
    return this.props.store.getState().goToId;
  }

  _getUserActiveId() {
    return this.props.store.getState().users.find((user) => user.userActive).userData.id;
  }

  render() {
    return (
      <div className={classes.Profile}>
        <NarrowColumn
          userId={this._getUserId()}
          // userActiveId={this._getUserActiveId()}
          store={this.props.store}
        />
        <WideColumn
          userId={this._getUserId()}
          userActiveId={this._getUserActiveId()}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default Profile;
