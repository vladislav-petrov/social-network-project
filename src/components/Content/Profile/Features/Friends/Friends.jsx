import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = function(props) {
  const user = props.user;
  // const userActive = props.state.users.find((user) => user.userActive);

  const friends = user.friends.map((id) => {
    return props.state.users.find((user) => user.userData.id === id);
  });

  const friendsOnline = friends.filter((friend) => friend.networkStatus === 'Online');

  return (
    <div className={classes.Friends}>
      <div className={classes.Friends_FriendsAll}>
        <span className={classes.FriendsAll_Header}>
          Friends {friends.length}
        </span>
        {
          friends.slice(0, 6).map((friend) => {
            return (
              <Friend
                key={friend.userData.id}
                friend={friend}
                changeGoToId={props.changeGoToId}
              />
            );
          })
        }
      </div>
      <div className={classes.Friends_FriendsOnline}>
        <span className={classes.FriendsOnline_Header}>
          Friends online {friendsOnline.length}
        </span>
        {
          friendsOnline.slice(0, 6).map((friend) => {
            return (
              <Friend
                key={friend.userData.id}
                friend={friend}
                changeGoToId={props.changeGoToId}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Friends;
