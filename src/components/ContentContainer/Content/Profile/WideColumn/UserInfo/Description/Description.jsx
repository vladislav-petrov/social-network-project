import React from 'react';
import style from './Description.module.css';
import ItemsContainer from './ItemsContainer/ItemsContainer';
import ValuesContainer from './ValuesContainer/ValuesContainer';

class Description extends React.Component {
  render() {
    return (
      <div className={style.Description}>
        <ItemsContainer />
        <ValuesContainer />
      </div>
    );
  }
}

export default Description;
