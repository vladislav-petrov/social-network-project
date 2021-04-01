import React from 'react';
import style from './Description.module.css';
import Items from './Items/Items';
import Values from './Values/Values';

class Description extends React.Component {
  render() {
    return (
      <div className={style.Description}>
        <Items
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
        <Values
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default Description;
