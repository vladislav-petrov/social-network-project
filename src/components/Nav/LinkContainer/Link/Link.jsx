import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Link.module.css';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.section === 'Profile') {
      this.props.changeGoToId(this.props.idActive);
    }
  }

  render() {
    return (
      <NavLink
        className={style.Link}
        activeClassName={style.Link__active}
        to={this.props.URLPart}
        onClick={this.handleClick}
      >
        {this.props.section}
      </NavLink>
    );
  }
}

export default Link;
