import React from 'react';
import style from './Items.module.css';
import Unit from '../../General/Unit/Unit';

class Items extends React.Component {
  render() {
    return (
      <div className={style.Items}>
        {
          this.props.items.map((item) => {
            return (
              <Unit
                key={item.id}
                className='Item'
                text={`${item.text}:`}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Items;
