import React from 'react';
import Friend from './Friend/Friend';
import { changeGoToIdCreateAction } from '../../../../../../../../redux/feautures/goToId/goToIdSlice';

class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeGoToId = this.changeGoToId.bind(this);
  }

  changeGoToId(id) {
    this.props.store.dispatch(changeGoToIdCreateAction(id));
  }

  render() {
    return (
      <Friend
        id={this.props.friendData.id}
        imageURL={this.props.friendData.imageURL}
        imageAlt={this.props.friendData.imageAlt}
        firstName={this.props.friendData.firstName}
        changeGoToId={this.changeGoToId}
      />
    );
  }
}

export default FriendContainer;
