import React from 'react';
import style from './Friend.module.css';
import { Link } from 'react-router-dom';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeGoToId(this.props.id);
  }

  render() {
    return (
      <div className={style.Friend}>
        <Link
          style={
            {
              display: 'inline-block',
              width: '60px',
              height: '60px',
              margin: '0 10px'
            }
          }
          to={`/id${this.props.id}`}
        >
          <img
            className={style.Friend_Image}
            src={this.props.imageURL}
            alt={this.props.imageAlt}
            onClick={this.handleClick}
          />
        </Link>
        <Link
          style={
            {
              display: 'inline-block',
              width: 'max-content',
              textDecoration: 'none'
            }
          }
          to={`/id${this.props.id}`}
        >
          <span
            className={style.Friend_FirstName}
            onClick={this.handleClick}
          >
            {this.props.firstName}
          </span>
        </Link>
      </div>
    );
  }
}

export default Friend;
