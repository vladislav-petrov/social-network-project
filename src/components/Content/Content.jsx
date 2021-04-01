import React from 'react';
import { Route } from 'react-router-dom';
import style from './Content.module.css';
import Profile from './Profile/Profile';
import Chats from './Chats/Chats';

class Content extends React.Component {
  _getId() {
    return this.props.store.getState().goToId;
  }

  render() {
    return (
      <div className={style.Content}>
        <Route
          path={`/id${this._getId()}`}
          render={(propsRoute) => <Profile {...propsRoute}
            store={this.props.store}
          />}
        />
        <Route
          path='/chats'
          render={(propsRoute) => <Chats {...propsRoute}
            store={this.props.store}
          />}
        />
      </div>
    );
  }
}

export default Content;
