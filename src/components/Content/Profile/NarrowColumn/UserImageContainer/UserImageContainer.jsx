import React from 'react';
import UserImage from './UserImage/UserImage';

class UserImageContainer extends React.Component {
  _getImageURL() {
    return this.props.store.getState().users.find((user) => user.userData.id === this.props.userId).userData.imageURL;
  }

  _getImageAlt() {
    return this.props.store.getState().users.find((user) => user.userData.id === this.props.userId).userData.imageAlt;
  }

  render() {
    return (
      <UserImage
        imageURL={this._getImageURL()}
        imageAlt={this._getImageAlt()}
      />
    );
  }
}

export default UserImageContainer;
