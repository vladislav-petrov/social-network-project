import React from 'react';
import style from './Posts.module.css';
import FormContainer from '../../../../General/FormContainer/FormContainer';
import PostsListContainer from './PostsListContainer/PostsListContainer';

class Posts extends React.Component {
  render() {
    return (
      <div className={style.Posts}>
        <div className={style.Posts_Form}>
          <FormContainer
            type='PostsForm'
            userId={this.props.userId}
            userActiveId={this.props.userActiveId}
            dispatch={this.props.dispatch}
          />
        </div>
        <PostsListContainer />
      </div>
    );
  }
}

export default Posts;
