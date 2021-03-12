import classes from './Post.module.css';

const Post = function(props) {
  return (
    <div className={classes.post}>
      Post {props.number}
    </div>
  );
}

export default Post;