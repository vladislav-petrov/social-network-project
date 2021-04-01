import React from 'react';
import Name from './Name/Name';

class NameContainer extends React.Component {
  _getName() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return `${user.userData.firstName} ${user.userData.lastName}`;
  }

  render() {
    return (
      <Name
        name={this._getName()}
      />
    );
  }
}

export default NameContainer;
