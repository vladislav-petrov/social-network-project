import classes from './Form.module.css';

const Form = function() {
  return (
    <form className={classes.Form}>
      <textarea className={classes.Form_Text} />
      <input className={classes.Form_Submit} type="submit" value="Send" />
    </form>
  );
}

export default Form;
