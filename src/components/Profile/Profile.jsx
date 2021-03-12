import classes from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = function() {
  return (
    <div className={classes.profile}>
      <img
        className={classes.profile__header}
        src="content.jpg"
        alt="Content"
      />
      <div className={classes.profile__userInfo}>
        <img
          className={classes.profile__userImage}
          src="profile-logo.jpg"
          alt="User"
        />
        <div className={classes.profile__userDescription}>
          Age: 30
          City: Los-Angeles
        </div>
      </div>
      <Posts />
    </div>
  );
}

export default Profile;
