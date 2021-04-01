import React from 'react';
import style from './Header.module.css';
import logo from '../../img/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className={style.Header}>
        <img
          className={style.Header_Image}
          src={logo}
          alt="Logo"
        />
      </header>
    );
  }
}

export default Header;
