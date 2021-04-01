import { connect } from 'react-redux';
import Link from './Link/Link';
import { changeGoToIdCreateAction } from '../../../redux/feautures/goToId/goToIdSlice';

const mapStateToProps = function(state, ownProps) {
  const idActive = state.users.find((user) => user.userActive).userData.id;

  const URLPart = ownProps.section === 'Profile' ? `/id${idActive}` : `/${ownProps.section.toLowerCase()}`;

  return {
    idActive,
    URLPart
  };
}

const mapDispatchToProps = {
  changeGoToId: changeGoToIdCreateAction
};

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);

export default LinkContainer;
