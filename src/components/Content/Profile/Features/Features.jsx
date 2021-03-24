import classes from './Features.module.css';
import Friends from './Friends/Friends';

const Features = function(props) {
  return (
    <div className={classes.Features}>
      <Friends
        user={props.user}
        state={props.state}
        changeGoToId={props.changeGoToId}
      />
    </div>
  );
}

export default Features;
