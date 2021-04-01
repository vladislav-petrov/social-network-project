import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './User.module.css';

class User extends React.Component {
  render() {
    return (
      <NavLink
        className={style.User}
        activeClassName={style.User__active}
        to={`/chats/id${this.props.id}`}
      >
        <img
          className={style.User_Image}
          src={this.props.imageURL}
          alt={this.props.imageAlt}
        />
        <div className={style.User_Name}>
          {this.props.name}
        </div>
      </NavLink>
    );
  }
}

export default User;
