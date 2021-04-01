import React from 'react';
import style from './Values.module.css';
import UnitContainer from '../General/UnitContainer/UnitContainer';

class Values extends React.Component {
  _getValues() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return user.userData.description.map((part) => part[1]);
  }

  render() {
    return (
      <div className={style.Values}>
        {
          this._getValues().map((value, index) => {
            return (
              <UnitContainer
                key={(index + 1).toString()}
                type='Value'
                text={value}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Values;
