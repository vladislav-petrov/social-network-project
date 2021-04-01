import React from 'react';
import Post from './Post/Post';

class PostContainer extends React.Component {
  _getAuthor() {
    return this.props.store.getState().users.find((user) => user.userData.id === this.props.postData.authorId);
  }

  render() {
    const author = this._getAuthor();

    return (
      <Post
        authorName={`${author.userData.firstName} ${author.userData.lastName}`}
        authorImageURL={author.userData.imageURL}
        authorImageAlt={author.userData.imageAlt}
        date={this.props.postData.date}
        text={this.props.postData.text}
        likes={this.props.postData.likes}
      />
    );
  }
}

export default PostContainer;
