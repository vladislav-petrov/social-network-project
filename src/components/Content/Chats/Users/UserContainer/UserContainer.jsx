import React from 'react';
import User from './User/User';

class UserContainer extends React.Component {
  _getUserData() {
    return this.props.user.userData;
  }

  render() {
    const userData = this._getUserData();

    return (
      <User
        id={userData.id}
        imageURL={userData.imageURL}
        imageAlt={userData.imageAlt}
        name={`${userData.firstName} ${userData.lastName}`}
      />
    );
  }
}

export default UserContainer;
