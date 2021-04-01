import React from 'react';
import style from './Name.module.css';

class Name extends React.Component {
  render() {
    return (
      <div className={style.Name}>
        {this.props.name}
      </div>
    );
  }
}

export default Name;
