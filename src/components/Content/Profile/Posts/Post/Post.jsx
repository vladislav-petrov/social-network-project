import classes from './Post.module.css';
import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className={classes.Post}>
        <div className={classes.Post_Info}>
          <img
            className={classes.Info_AuthorImage}
            src={this.props.authorImageURL}
            alt={this.props.authorImageAlt}
          />
          <div className={classes.Info_TextInfo}>
            <span className={classes.TextInfo_AuthorName}>
              {this.props.authorName}
            </span>
            <span className={classes.TextInfo_PostDate}>
              {this.props.date}
            </span>
          </div>
        </div>
        <p className={classes.Post_Text}>
          {this.props.text}
        </p>
        <span className={classes.Post_Likes}>
          {this.props.likes} ♥
        </span>
      </div>
    );
  }
}

export default Post;
