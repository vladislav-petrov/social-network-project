import classes from './Header.module.css';
import logo from '../../img/logo.png';

const Header = function() {
  return (
    <header className={classes.Header}>
      <img
        className={classes.Header_Image}
        src={logo}
        alt="Logo"
      />
    </header>
  );
}

export default Header;
