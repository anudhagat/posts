import React from 'react';
import './styles.css';
import { Comment } from '../../models/comments/types';

interface Props {
  comment: Comment;
}

function CommentListItem({ comment }: Props) {
  return (
    <li className="commentListItem">
      <div className="commentSubject">{comment.name}</div>
      <div className="commentBody">{comment.body}</div>
      <div className="commentEmail">
        <a href={comment.email}>{comment.email}</a>
      </div>
    </li>
  );
}
export default CommentListItem;
