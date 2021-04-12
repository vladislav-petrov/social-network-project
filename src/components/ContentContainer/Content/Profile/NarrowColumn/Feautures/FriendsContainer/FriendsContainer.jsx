import { connect } from 'react-redux';
import Friends from './Friends/Friends';

const mapStateToProps = function(state) {
  const user = state.users.find((user) => user.userData.id === state.goToId);
  const friends = user.friends.map((friendId) => state.users.find((user) => user.userData.id === friendId));
  const friendsAll = friends.slice(0, 6);
  const friendsOnline = friends.filter((friend) => friend.networkStatus === 'Online').slice(0, 6);

  return {
    friendsAll,
    friendsOnline
  };
}


const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
