import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../../models/posts/posts-actions';
import { Post } from '../../models/posts/types';
import { AppState } from '../../models/reducers';
import PostList from '../../components/post-list';
import { fetchUsersAction } from '../../models/users/users-actions';
import { User } from '../../models/users/types';

interface StateProps {
  posts: Post[];
  users: { [id: number]: User };
  isUsersLoading: boolean;
  isPostsLoading: boolean;
  error: string;
}

interface DispatchProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
}

type Props = StateProps & DispatchProps;

export class PostsView extends Component<Props> {
  componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;
    if (fetchPosts) {
      fetchPosts();
    }
    if (fetchUsers) {
      fetchUsers();
    }
  }
  render() {
    const { posts, isUsersLoading, isPostsLoading } = this.props;
    return (
      <PostList
        posts={posts}
        isUsersLoading={isUsersLoading}
        isPostsLoading={isPostsLoading}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  posts: Object.values(state.posts.posts),
  users: state.users.users,
  isUsersLoading: state.users.loading,
  isPostsLoading: state.posts.loading,
});

const mapDispatchToProps = {
  fetchPosts: fetchPostsAction,
  fetchUsers: fetchUsersAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsView);
