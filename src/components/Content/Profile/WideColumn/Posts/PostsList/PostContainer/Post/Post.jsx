import React from 'react';
import style from './Post.module.css';

class Post extends React.Component {
  render() {
    return (
      <div className={style.Post}>
        <div className={style.Post_Info}>
          <img
            className={style.Info_AuthorImage}
            src={this.props.authorImageURL}
            alt={this.props.authorImageAlt}
          />
          <div className={style.Info_TextInfo}>
            <span className={style.TextInfo_AuthorName}>
              {this.props.authorName}
            </span>
            <span className={style.TextInfo_PostDate}>
              {this.props.date}
            </span>
          </div>
        </div>
        <p className={style.Post_Text}>
          {this.props.text}
        </p>
        <span className={style.Post_Likes}>
          {this.props.likes} ♥
        </span>
      </div>
    );
  }
}

export default Post;
