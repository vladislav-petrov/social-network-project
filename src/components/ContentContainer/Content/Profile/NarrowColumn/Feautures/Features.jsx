import React from 'react';
import style from './Features.module.css';
import FriendsContainer from './FriendsContainer/FriendsContainer';

class Features extends React.Component {
  render() {
    return (
      <div className={style.Features}>
        <FriendsContainer />
      </div>
    );
  }
}

export default Features;
