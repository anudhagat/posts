import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Post } from '../../models/posts/types';
import { User } from '../../models/users/types';

interface Props {
  post: Post;
  user: User;
}

function PostListItem({ post, user }: Props) {
  const username = (user && user.username) || '';
  const userId = (user && user.id) || '';

  return (
    <li className="postListItem">
      <Link
        to={{
          pathname: `/post/${post.id}`,
          state: {
            post: post,
          },
        }}
      >
        <span className="postTitle">{post.title}</span>
        <span> by </span>
        <Link
          to={{
            pathname: `/user/${userId}`,
            state: {
              user,
            },
          }}
        >
          <span className="username">{username}</span>
        </Link>
      </Link>
    </li>
  );
}
export default PostListItem;
