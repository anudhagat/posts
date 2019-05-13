import React from 'react';
import CommentListItem from './comment-list-item';
import { Comment } from '../../models/comments/types';
import './styles.css';

type Props = {
  comments: Comment[];
};

function CommentList({ comments }: Props) {
  return (
    <div>
      <h4 className="commentTitle">Comments</h4>
      <ul className="commentList">
        {comments.map((comment: Comment) => (
          <CommentListItem comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
}
export default CommentList;
