import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = function() {
  return (
    <div className={classes.posts}>
      <form className={classes.posts__input}>
        <textarea className={classes.posts__postText} />
        <br />
        <input className={classes.posts__submit} type="submit" value="Post" />
      </form>
      <div className={classes.posts__list}>
        <Post number="1" />
        <Post number="2" />
        <Post number="3" />
      </div>
    </div>
  );
}

export default Posts;