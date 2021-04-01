import React from 'react';
import style from './NarrowColumn.module.css';
import UserImageContainer from './UserImageContainer/UserImageContainer';
import Actions from './Actions/Actions';
import Features from './Feautures/Features';

class NarrowColumn extends React.Component {
  render() {
    return (
      <div className={style.NarrowColumn}>
        <UserImageContainer
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
        <Actions
          // userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          // store={this.props.store}
        />
        <Features
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default NarrowColumn;
