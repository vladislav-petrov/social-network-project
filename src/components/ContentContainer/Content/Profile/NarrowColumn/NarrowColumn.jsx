import React from 'react';
import style from './NarrowColumn.module.css';
import UserImageContainer from './UserImageContainer/UserImageContainer';
import Actions from './Actions/Actions';
import Features from './Feautures/Features';

class NarrowColumn extends React.Component {
  render() {
    return (
      <div className={style.NarrowColumn}>
        <UserImageContainer />
        <Actions />
        <Features />
      </div>
    );
  }
}

export default NarrowColumn;
