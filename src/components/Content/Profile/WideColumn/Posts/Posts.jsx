import React from 'react';
import style from './Posts.module.css';
import FormContainer from '../../../General/FormContainer/FormContainer';
import PostsList from './PostsList/PostsList';

class Posts extends React.Component {
  render() {
    return (
      <div className={style.Posts}>
        <div className={style.Posts_Form}>
          <FormContainer
            type='PostsForm'
            userId={this.props.userId}
            userActiveId={this.props.userActiveId}
            store={this.props.store}
          />
        </div>
        <PostsList
          userId={this.props.userId}
          // userActiveId={this.props.userActiveId}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default Posts;
