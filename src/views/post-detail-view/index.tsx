import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import fetchCommentsAction from '../../models/comments/comments-actions';
import { Comment } from '../../models/comments/types';
import CommentList from '../../components/comment-list';

interface OwnProps {
  match: {
    params: {
      postId: string;
    };
  };
}

interface StateProps {
  comments: Comment[];
  postId: number;
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
    const { comments } = this.props;
    return (
      <div>
        <h3>Post Title: </h3>
        {comments.length && <CommentList comments={comments} />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const postId = parseInt(ownProps.match.params.postId);
  return {
    comments: state.comments.comments[postId] || [],
    loading: state.users.loading,
    postId,
  };
};

const mapDispatchToProps = {
  fetchComments: fetchCommentsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailView);
