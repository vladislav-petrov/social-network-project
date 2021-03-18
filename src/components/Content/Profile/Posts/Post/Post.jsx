import classes from './Post.module.css';

const Post = function(props) {
  return (
    <div className={classes.Post}>
      <div className={classes.Post_Info}>
        <img
          className={classes.Info_AuthorImage}
          src={props.imageURL}
          alt={props.imageAlt}
        />
        <div className={classes.Info_TextInfo}>
          <span className={classes.TextInfo_AuthorName}>
            {props.name}
          </span>
          <span className={classes.TextInfo_PostDate}>
            {props.date}
          </span>
        </div>
      </div>
      <p className={classes.Post_Text}>
        {props.text}
      </p>
      <span className={classes.Post_Likes}>
        {props.likes} ♥
      </span>
    </div>
  );
}

export default Post;
