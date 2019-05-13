import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Post } from '../../models/posts/types';

interface Props {
  post: Post;
}

function PostListItem({ post }: Props) {
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
        <span>{post.title}</span>
      </Link>
    </li>
  );
}
export default PostListItem;
