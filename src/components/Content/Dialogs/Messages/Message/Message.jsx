import classes from './Message.module.css';

const Message = function(props) {
  return (
    <div className={classes.Message}>
      <div className={classes.Message_Info}>
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
      <div className={classes.Message_Text}>
        {props.text}
      </div>
    </div>
  );
}

export default Message;
