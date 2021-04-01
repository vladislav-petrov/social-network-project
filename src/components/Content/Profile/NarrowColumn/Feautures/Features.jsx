import React from 'react';
import style from './Features.module.css';
import Friends from './Friends/Friends';

class Features extends React.Component {
  render() {
    return (
      <div className={style.Features}>
        <Friends
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default Features;
