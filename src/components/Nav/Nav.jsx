import classes from './Nav.module.css';
import Link from './Link/Link';

const Nav = function() {
  return (
    <nav className={classes.Nav}>
      {
        [
          'Profile',
          'Dialogs',
          'News',
          'Music',
          'Settings'
        ].map((value, index) => {
          return (
            <Link
              key={(index + 1).toString()}
              section={value}
            />
          );
        })
      }
    </nav>
  );
}

export default Nav;
