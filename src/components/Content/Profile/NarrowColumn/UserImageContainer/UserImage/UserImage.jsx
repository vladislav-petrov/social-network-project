import React from 'react';
import style from './UserImage.module.css';

class UserImage extends React.Component {
  render() {
    return (
      <img
        className={style.UserImage}
        src={this.props.imageURL}
        alt={this.props.imageAlt}
      />
    );
  }
}

export default UserImage;
