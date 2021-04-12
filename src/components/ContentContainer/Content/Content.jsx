import React from 'react';
import { Route } from 'react-router-dom';
import style from './Content.module.css';
import Profile from './Profile/Profile';
import ChatsContainer from './ChatsContainer/ChatsContainer';

class Content extends React.Component {
  render() {
    return (
      <div className={style.Content}>
        <Route
          path={`/id${this.props.userId}`}
          render={
            (propsRoute) => {
              return (
                <Profile
                  {...propsRoute}
                />
              );
            }
          }
        />
        <Route
          path={'/chats'}
          render={
            (propsRoute) => {
              return (
                <ChatsContainer
                  {...propsRoute}
                />
              );
            }
          }
        />
      </div>
    );
  }
}

export default Content;
