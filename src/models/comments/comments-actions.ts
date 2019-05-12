import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchCommentsByPostId } from '../../services/posts';
import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_PENDING,
} from './types';
import arrayToObject from '../../utils';

const fetchUsersAction = (
  postId: number,
): ThunkAction<void, AppState, null, Action<string>> => {
  return dispatch => {
    dispatch({ type: FETCH_COMMENTS_PENDING });
    fetchCommentsByPostId(postId)
      .then(comments => {
        const CommentsObject = arrayToObject(comments, 'postId');
        return dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: CommentsObject,
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

export default fetchUsersAction;
