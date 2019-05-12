import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchCommentsByPostId } from '../../services/posts';
import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_PENDING,
} from './types';

const fetchCommentsAction = (
  postId: number,
): ThunkAction<void, AppState, null, Action<string>> => {
  return dispatch => {
    dispatch({ type: FETCH_COMMENTS_PENDING });
    fetchCommentsByPostId(postId)
      .then(comments => {
        return dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: { comments, postId },
        });
      })
      .catch(() =>
        dispatch({
          type: FETCH_COMMENTS_FAILURE,
          error: 'There was a problem fetching the comments for this post.',
        }),
      );
  };
};

export default fetchCommentsAction;
