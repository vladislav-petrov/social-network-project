import classes from './Profile.module.css';
import DescriptionPart from './DescriptionPart/DescriptionPart';
import Posts from './Posts/Posts';

const Profile = function(props) {
  return (
    <div className={classes.Profile}>
      <div className={classes.Profile_UserInfo}>
        <img
          className={classes.Profile_UserImage}
          src={props.data.userData.imageURL}
          alt={props.data.userData.imageAlt}
        />
        <span className={classes.Profile_UserName}>
          {`${props.data.userData.firstName} ${props.data.userData.lastName}`}
        </span>
        <div className={classes.Profile_UserDescription}>
          <div className={classes.UserDescription_Item}>
            {
              props.data.userData.details.map((item, index) => {
                return (
                  <DescriptionPart
                    key={(index + 1).toString()}
                    item={`${item[0]}:`}
                  />
                );
              })
            }
          </div>
          <div className={classes.UserDescription_Value}>
            {
              props.data.userData.details.map((value, index) => {
                return (
                  <DescriptionPart
                    key={(index + 1).toString()}
                    value={`${value[1]}`}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
      <Posts data={props.data}/>
    </div>
  );
}

export default Profile;
