import classes from './Person.module.css';
import { NavLink } from 'react-router-dom';

const Person = function(props) {
  return (
    <div className={classes.Person}>
      <img
        className={classes.Person_Image}
        src={props.imageURL}
        alt={props.imageAlt}
      />
      <NavLink
        className={classes.Person_Name}
        activeClassName={classes.Person_Name__active}
        to={`/dialogs/${props.id}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
}

export default Person;
