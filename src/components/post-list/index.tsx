import React from 'react';
import PostListItem from './post-list-item';
import { Post } from '../../models/posts/types';
import { User } from '../../models/users/types';
import './styles.css';

type Props = {
  posts: Post[];
  users: { [id: number]: User };
  isUsersLoading: boolean;
  isPostsLoading: boolean;
};

function PostList({ posts, users }: Props) {
  return (
    <ul className="postList">
      {posts.map((post: Post) => {
        const user = users[post.userId];
        return <PostListItem post={post} key={post.id} user={user} />;
      })}
    </ul>
  );
}
export default PostList;
