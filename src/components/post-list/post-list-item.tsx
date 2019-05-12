import React from 'react';
import './styles.css';
import { Post } from '../../models/posts/types';

interface Props {
  post: Post;
}

function PostListItem({ post }: Props) {
  return (
    <li className="postListItem">
      <span>{post.title}</span>
    </li>
  );
}
export default PostListItem;
