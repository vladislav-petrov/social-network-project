import classes from './Nav.module.css';

const Nav = function() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li>
          <a className={classes.nav__item} href="">Profile</a>
        </li>
        <li>
          <a className={classes.nav__item} href="">Messages</a>
        </li>
        <li>
          <a className={classes.nav__item} href="">News</a>
        </li>
        <li>
          <a className={classes.nav__item} href="">Music</a>
        </li>
        <li>
          <a className={classes.nav__item} href="">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
