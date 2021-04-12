import React from 'react';
import style from './PostsList.module.css';
import PostContainer from './PostContainer/PostContainer';
import Hint from '../../../../../../General/Hint/Hint';

class PostsList extends React.Component {
  render() {
    return (
      <div className={style.PostsList}>
        {
          this.props.posts.length ? (
            this.props.posts.map((post) => {
              return (
                <PostContainer
                  key={post.id}
                  postData={post}
                />
              );
            })
          ) : (
            <Hint
              text="There are no posts here yet"
            />
          )
        }
      </div>
    );
  }
}

export default PostsList;
