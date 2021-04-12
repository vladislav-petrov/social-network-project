import React from 'react';
import style from './Values.module.css';
import Unit from '../../General/Unit/Unit';

class Values extends React.Component {
  render() {
    return (
      <div className={style.Values}>
        {
          this.props.values.map((value) => {
            return (
              <Unit
                key={value.id}
                className='Value'
                text={value.text}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Values;
