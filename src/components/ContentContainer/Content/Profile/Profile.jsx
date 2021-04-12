import React from 'react';
import classes from './Profile.module.css';
import NarrowColumn from './NarrowColumn/NarrowColumn';
import WideColumn from './WideColumn/WideColumn';

class Profile extends React.Component {
  render() {
    return (
      <div className={classes.Profile}>
        <NarrowColumn />
        <WideColumn />
      </div>
    );
  }
}

export default Profile;
