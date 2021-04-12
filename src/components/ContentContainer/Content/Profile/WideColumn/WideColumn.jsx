import React from 'react';
import style from './WideColumn.module.css';
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './PostsContainer/PostsContainer';

class WideColumn extends React.Component {
  render() {
    return (
      <div className={style.WideColumn}>
        <UserInfo />
        <PostsContainer />
      </div>
    );
  }
}

export default WideColumn;
