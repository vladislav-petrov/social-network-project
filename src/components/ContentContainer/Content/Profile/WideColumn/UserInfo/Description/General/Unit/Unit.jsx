import React from 'react';
import style from './Unit.module.css';

class Unit extends React.Component {
  render() {
    return (
      <span className={`${style.Unit} ${style[this.props.className]}`}>
        {this.props.text}
      </span>
    );
  }
}

export default Unit;
