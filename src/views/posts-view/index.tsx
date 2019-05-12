import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPostsAction from '../../models/posts/posts-actions';
import { Post } from '../../models/posts/types';
import { AppState } from '../../models/reducers';
import PostList from '../../components/post-list';

interface StateProps {
  posts: Post[];
  loading: boolean;
  error: string;
}

interface DispatchProps {
  fetchPosts: () => void;
}

type Props = StateProps & DispatchProps;

export class PostsView extends Component<Props> {
  componentDidMount() {
    const { fetchPosts } = this.props;
    if (fetchPosts) {
      fetchPosts();
    }
  }
  render() {
    const { posts } = this.props;
    return <PostList posts={posts} />;
  }
}

const mapStateToProps = (state: AppState) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  fetchPosts: fetchPostsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsView);
