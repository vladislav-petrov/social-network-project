import classes from './Friend.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Friend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.friend.userData.id
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeGoToId(this.state.id);
  }

  render() {
    return (
      <Link
        className={classes.Link}
        to={`/id${this.state.id.toLowerCase()}`}
      >
        <div className={classes.Friend}>
          <img
            className={classes.Friend_Image}
            src={this.props.friend.userData.imageURL}
            alt={this.props.friend.userData.imageAlt}
            onClick={this.handleClick}
          />
          <span
            className={classes.Friend_Name}
            onClick={this.handleClick}
          >
            {this.props.friend.userData.firstName}
          </span>
        </div>
      </Link>
    );
  }
}

export default Friend;
