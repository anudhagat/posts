import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import fetchCommentsAction from '../../models/comments/comments-actions';
import { Comment } from '../../models/comments/types';
import CommentList from '../../components/comment-list';
import { Post } from '../../models/posts/types';
import { User } from '../../models/users/types';

interface OwnProps {
  match: {
    params: {
      postId: string;
    };
  };
  location: {
    state: {
      post: Post;
    };
  };
}

interface StateProps {
  comments: Comment[];
  postId: number;
  post: Post;
  user: User;
  loading: boolean;
  error: string;
}

interface DispatchProps {
  fetchComments: (id: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

export class PostDetailView extends Component<Props> {
  componentDidMount() {
    const { fetchComments, postId } = this.props;
    if (fetchComments) {
      fetchComments(postId);
    }
  }
  render() {
    const { comments, post, user } = this.props;
    console.log('post: ', post);
    console.log('user: ', user);
    return (
      <div>
        <h3>Post Title: </h3>
        {comments.length && <CommentList comments={comments} />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  console.log('ownProps: ', ownProps);
  const postId = parseInt(ownProps.match.params.postId);
  const post = state.posts.posts[postId] || {};
  const userId = post.userId;
  const user = state.users.users[userId] || {};
  return {
    comments: state.comments.comments[postId] || [],
    loading: state.users.loading,
    postId,
    post,
    user,
  };
};

const mapDispatchToProps = {
  fetchComments: fetchCommentsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailView);
