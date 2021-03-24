import classes from './Hint.module.css';

const Hint = function(props) {
  return (
    <span className={classes.Hint}>
      {props.text}
    </span>
  );
}

export default Hint;
