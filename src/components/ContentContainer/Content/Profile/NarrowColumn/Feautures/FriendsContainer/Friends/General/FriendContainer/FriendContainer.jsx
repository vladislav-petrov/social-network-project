import { connect } from 'react-redux';
import Friend from './Friend/Friend';
import { changeGoToIdCreateAction } from '../../../../../../../../../../redux/feautures/goToId/goToIdSlice';

const mapDispatchToProps = {
  changeGoToId: changeGoToIdCreateAction
}

const FriendContainer = connect(null, mapDispatchToProps)(Friend);

export default FriendContainer;
