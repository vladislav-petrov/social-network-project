import React from 'react';
import style from './Items.module.css';
import UnitContainer from '../General/UnitContainer/UnitContainer';

class Items extends React.Component {
  _getItems() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return user.userData.description.map((part) => part[0]);
  }

  render() {
    return (
      <div className={style.Items}>
        {
          this._getItems().map((item, index) => {
            return (
              <UnitContainer
                key={(index + 1).toString()}
                type='Item'
                text={`${item}:`}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Items;
