import React from 'react';
import Unit from './Unit/Unit';

class UnitContainer extends React.Component {
  _getClassName() {
    return this.props.type === 'Item' ? 'Item' : 'Value';
  }

  render() {
    return (
      <Unit
        className={this._getClassName()}
        text={this.props.text}
      />
    );
  }
}

export default UnitContainer;
