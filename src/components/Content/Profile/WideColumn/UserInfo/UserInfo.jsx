import React from 'react';
import style from './UserInfo.module.css';
import NameContainer from './NameContainer/NameContainer';
import NetworkStatusContainer from './NetworkStatusContainer/NetworkStatusContainer';
import Description from './Description/Description';

class UserInfo extends React.Component {
  render() {
    return (
      <div className={style.UserInfo}>
        <NameContainer
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
        <NetworkStatusContainer
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
        <Description
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default UserInfo;
