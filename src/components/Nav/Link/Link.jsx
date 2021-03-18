import classes from './Link.module.css';
import { NavLink } from 'react-router-dom';

const Link = function(props) {
  return (
    <NavLink
      className={classes.Link}
      activeClassName={classes.Link__active}
      to={`/${props.section.toLowerCase()}`}
    >
      {props.section}
    </NavLink>
  );
}

export default Link;
