import React from 'react';
import style from './WideColumn.module.css';
import UserInfo from './UserInfo/UserInfo';
import Posts from './Posts/Posts';

class WideColumn extends React.Component {
  render() {
    return (
      <div className={style.WideColumn}>
        <UserInfo
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
        <Posts
          userId={this.props.userId}
          userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default WideColumn;
