import React from 'react';
import style from './Message.module.css';

class Message extends React.Component {
  render() {
    return (
      <div className={style.Message}>
        <div className={style.Message_Info}>
          <img
            className={style.Info_AuthorImage}
            src={this.props.authorImageURL}
            alt={this.props.authorImageAlt}
          />
          <div className={style.Info_TextInfo}>
            <span className={style.TextInfo_AuthorFirstName}>
              {this.props.authorFirstName}
            </span>
            <span className={style.TextInfo_MessageDate}>
              {this.props.date}
            </span>
          </div>
        </div>
        <div className={style.Message_Text}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Message;
