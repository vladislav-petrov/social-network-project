import classes from './Header.module.css';

const Header = function() {
  return (
    <header className={classes.header}>
      <img
        className={classes.header__image}
        src="logo192.png"
        alt="React logo"
      />
    </header>
  );
}

export default Header;