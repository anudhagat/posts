import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import fetchCommentsAction from '../../models/comments/comments-actions';
import { fetchPostByIdAction } from '../../models/posts/posts-actions';
import { fetchUserByIdAction } from '../../models/users/users-actions';
import { Comment } from '../../models/comments/types';
import CommentList from '../../components/comment-list';
import { Post } from '../../models/posts/types';
import { User } from '../../models/users/types';
import './styles.css';

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
  fetchPostById: (id: number) => any;
  fetchUserById: (id: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

export class PostDetailView extends Component<Props> {
  componentDidMount() {
    const { fetchComments, postId, post, fetchPostById } = this.props;

    // if the post is not loaded in the redux store, fetch it
    if (post && !post.id) {
      fetchPostById(postId);
    }

    if (fetchComments) {
      fetchComments(postId);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { post, fetchUserById, user } = this.props;

    // If this post's user is not in the store, then fetch it.
    // This can happen when we are coming to /post/:postid directly and not via /posts.
    if (prevProps.post.id !== post.id && user && !user.id) {
      fetchUserById(post.userId);
    }
  }

  render() {
    const { comments, post, user } = this.props;
    const titleText = `Post Title: ${post.title}`;
    const authorText = `Posted by: ${user.username}`;
    return (
      <div className="postDetail">
        <h3 className="postTitle">{titleText}</h3>
        <div className="postAuthor">{authorText}</div>
        <div className="postBody">{post.body}</div>
        {comments.length && <CommentList comments={comments} />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
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
  fetchPostById: fetchPostByIdAction,
  fetchUserById: fetchUserByIdAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailView);
