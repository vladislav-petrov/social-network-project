import React from 'react';
import style from './UserInfo.module.css';
import NameContainer from './NameContainer/NameContainer';
import NetworkStatusContainer from './NetworkStatusContainer/NetworkStatusContainer';
import Description from './Description/Description';

class UserInfo extends React.Component {
  render() {
    return (
      <div className={style.UserInfo}>
        <NameContainer />
        <NetworkStatusContainer />
        <Description />
      </div>
    );
  }
}

export default UserInfo;
