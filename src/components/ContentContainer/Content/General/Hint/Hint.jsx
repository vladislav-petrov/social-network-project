import React from 'react';
import style from './Hint.module.css';

class Hint extends React.Component {
  render() {
    return (
      <span className={style.Hint}>
        {this.props.text}
      </span>
    );
  }
}

export default Hint;
