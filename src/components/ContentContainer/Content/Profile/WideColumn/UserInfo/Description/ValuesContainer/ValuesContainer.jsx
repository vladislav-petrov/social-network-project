import { connect } from 'react-redux';
import Values from './Values/Values';

const mapStateToProps = function(state) {
  const userData = state.users.find((user) => user.userData.id === state.goToId).userData;
  const values = userData.descriptionData.description.map((part) => {
    return (
      {
        id: part.id,
        text: part.partText[1]
      }
    );
  });

  return (
    {
      values
    }
  );
}

const ValuesContainer = connect(mapStateToProps)(Values);

export default ValuesContainer;
