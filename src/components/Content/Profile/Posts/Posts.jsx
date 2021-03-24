import classes from './Posts.module.css';
import Form from './Form/Form';
import Post from './Post/Post';
import Hint from '../../General/Hint/Hint';

const Posts = function(props) {
  const user = props.user;
  // const userActive = props.state.users.find((user) => user.userActive);

  return (
    <div className={classes.Posts}>
      <div className={classes.Posts_Form}>
        <Form
          user={user}
          state={props.state}
          addPost={props.addPost}
        />
      </div>
      <div className={classes.Posts_List}>
        {
          user.postsData.posts.length ? (
            user.postsData.posts.map((post) => {
              const author = props.state.users.find((user) => user.userData.id === post.authorId);

              return (
                <Post
                  key={post.id}
                  authorName={`${author.userData.firstName} ${author.userData.lastName}`}
                  authorImageURL={author.userData.imageURL}
                  authorImageAlt={author.userData.imageAlt}
                  date={post.date}
                  text={post.text}
                  likes={post.likes}
                />
              );
            })
          ) : (
            <Hint
              text="There are no posts here yet"
            />
          )
        }
      </div>
    </div>
  );
}

export default Posts;
