import { connect } from 'react-redux';
import Items from './Items/Items';

const mapStateToProps = function(state) {
  const userData = state.users.find((user) => user.userData.id === state.goToId).userData;
  const items = userData.descriptionData.description.map((part) => {
    return (
      {
        id: part.id,
        text: part.partText[0]
      }
    );
  });

  return (
    {
      items
    }
  );
}

const ItemsContainer = connect(mapStateToProps)(Items);

export default ItemsContainer;
