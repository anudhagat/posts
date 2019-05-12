import React from 'react';
import PostListItem from './post-list-item';
import { Post } from '../../models/posts/types';
import './styles.css';

type Props = {
  posts: Post[];
  isUsersLoading: boolean;
  isPostsLoading: boolean;
};

function PostList({ posts }: Props) {
  return (
    <ul className="postList">
      {posts.map((post: Post) => (
        <PostListItem post={post} />
      ))}
    </ul>
  );
}
export default PostList;
