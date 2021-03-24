import classes from './Profile.module.css';
import UserActions from './UserActions/UserActions';
import DescriptionPart from './DescriptionPart/DescriptionPart';
import Features from './Features/Features';
import Posts from './Posts/Posts';

const Profile = function(props) {
  const user = props.state.users.find((user) => user.userData.id === props.id);
  // const userActive = props.state.users.find((user) => user.userActive);

  return (
    <div className={classes.Profile}>
      <div className={classes.Profile_NarrowColumn}>
        <img
          className={classes.Profile_UserImage}
          src={user.userData.imageURL}
          alt={user.userData.imageAlt}
        />
        <UserActions />
        <Features
          user={user}
          state={props.state}
          changeGoToId={props.changeGoToId}
        />
      </div>
      <div className={classes.Profile_WideColumn}>
        <div className={classes.Profile_UserInfo}>
          <div className={classes.UserInfo_UserName}>
            {`${user.userData.firstName} ${user.userData.lastName}`}
          </div>
          <div className={classes.UserInfo_UserNetworkStatus}>
            {user.networkStatus}
          </div>
          <div className={classes.UserInfo_UserDescription}>
            <div className={classes.UserDescription_Items}>
              {
                user.userData.other.map((item, index) => {
                  if (!item[1]) {
                    return false;
                  }

                  return (
                    <DescriptionPart
                      key={(index + 1).toString()}
                      item={`${item[0]}:`}
                    />
                  );
                })
              }
            </div>
            <div className={classes.UserDescription_Values}>
              {
                user.userData.other.map((value, index) => {
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
        <Posts
          user={user}
          state={props.state}
          addPost={props.addPost}
        />
      </div>
    </div>
  );
}

export default Profile;
