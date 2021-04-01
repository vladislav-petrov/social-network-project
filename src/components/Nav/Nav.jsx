import React from 'react';
import style from './Nav.module.css';
import LinkContainer from './LinkContainer/LinkContainer';

class Nav extends React.Component {
  render() {
    return (
      <nav className={style.Nav}>
        {
          [
            'Profile',
            'Chats',
            'News',
            'Music',
            'Settings'
          ].map((value, index) => {
            return (
              <LinkContainer
                key={(index + 1).toString()}
                section={value}
                // store={this.props.store}
              />
            );
          })
        }
      </nav>
    );
  }
}

export default Nav;
