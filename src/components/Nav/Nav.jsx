import React from 'react';
import style from './Nav.module.css';
import LinkContainer from './LinkContainer/LinkContainer';

class Nav extends React.Component {
  render() {
    return (
      <nav className={style.Nav}>
        {
          this.props.sections.map((section) => {
            return (
              <LinkContainer
                key={section.id}
                section={section.name}
              />
            );
          })
        }
      </nav>
    );
  }
}

export default Nav;
