import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchPosts, fetchPostById } from '../../services/posts';
import {
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
  ADD_POSTS_PENDING,
  FETCH_POST_FAILURE,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
} from './types';
import arrayToObject from '../../utils';

export const fetchPostsAction = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return dispatch => {
    dispatch({ type: ADD_POSTS_PENDING });
    fetchPosts()
      .then(posts => {
        const PostsObjects = arrayToObject(posts, 'id');
        return dispatch({ type: ADD_POSTS_SUCCESS, payload: PostsObjects });
      })
      .catch(error => dispatch({ type: ADD_POSTS_FAILURE, error }));
  };
};

export const fetchPostByIdAction = (
  id: number,
): ThunkAction<void, AppState, null, Action<string>> => {
  return dispatch => {
    dispatch({ type: FETCH_POST_PENDING });
    fetchPostById(id)
      .then(post => {
        return dispatch({ type: FETCH_POST_SUCCESS, payload: post });
      })
      .catch(() =>
        dispatch({
          type: FETCH_POST_FAILURE,
          error: 'There was an error in fetching this post.',
        }),
      );
  };
};
