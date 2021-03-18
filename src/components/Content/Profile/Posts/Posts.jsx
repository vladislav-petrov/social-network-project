import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = function(props) {
  return (
    <div className={classes.Posts}>
      <div className={classes.Posts_Template}></div>
      <form className={classes.Posts_Form}>
        <label className={classes.Form_Label}>
          What's new?
        </label>
        <textarea className={classes.Form_Text} />
        <input className={classes.Form_Submit} type="submit" value="Post" />
      </form>
      <div className={classes.Posts_List}>
        {
          props.data.posts.map((post, index) => {
            return (
              <Post
                key={(index + 1).toString()}

                name={post.id === '1' ? `${props.data.userData.firstName} ${props.data.userData.lastName}` : `${props.data.friendsData.find(friend => friend.id === post.id).firstName} ${props.data.friendsData.find(friend => friend.id === post.id).lastName}`}

                imageURL={post.id === '1' ? props.data.userData.imageURL : props.data.friendsData.find(friend => friend.id === post.id).imageURL}

                imageAlt={post.id === '1' ? props.data.userData.imageAlt : props.data.friendsData.find(friend => friend.id === post.id).imageAlt}

                date={post.date}
                text={post.text}
                likes={post.likes}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Posts;
