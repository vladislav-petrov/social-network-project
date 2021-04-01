import React from 'react';
import style from './PostsList.module.css';
import PostContainer from './PostContainer/PostContainer';
import Hint from '../../../../General/Hint/Hint';

class PostsList extends React.Component {
  _getPosts() {
    const user = this.props.store.getState().users.find((user) => user.userData.id === this.props.userId);
    return user.postsData.posts;
  }

  render() {
    const posts = this._getPosts();

    return (
      <div className={style.PostsList}>
        {
          posts.length ? (
            posts.map((post) => {
              return (
                <PostContainer
                  key={post.id}
                  postData={post}
                  // userId={this.props.userId}
                  // userActiveId={this.props.userActiveId}
                  store={this.props.store}
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
