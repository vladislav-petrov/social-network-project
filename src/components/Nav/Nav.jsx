import classes from './Nav.module.css';
import Link from './Link/Link';

const Nav = function(props) {
  return (
    <nav className={classes.Nav}>
      {
        [
          'Profile',
          'Chats',
          'News',
          'Music',
          'Settings'
        ].map((value, index) => {
          return (
            <Link
              key={(index + 1).toString()}
              section={value}
              state={props.state}
              changeGoToId={props.changeGoToId}
            />
          );
        })
      }
    </nav>
  );
}

export default Nav;
