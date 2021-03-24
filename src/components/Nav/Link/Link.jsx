import classes from './Link.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Link extends React.Component {
  _id = this.props.state.users.find((user) => user.userActive).userData.id;

  _URLPart = this.props.section === 'Profile' ? `/id${this._id}` : `/${this.props.section.toLowerCase()}`

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.section === 'Profile') {
      this.props.changeGoToId(this._id);
    }
  }

  render() {
    return (
      <NavLink
        className={classes.Link}
        activeClassName={classes.Link__active}
        to={this._URLPart}
        onClick={this.handleClick}
      >
        {this.props.section}
      </NavLink>
    );
  }
}

export default Link;
