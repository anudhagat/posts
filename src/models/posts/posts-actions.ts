import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchPosts } from '../../services/posts';
import {
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
  ADD_POSTS_PENDING,
} from './types';

const fetchPostsAction = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return dispatch => {
    dispatch({ type: ADD_POSTS_PENDING });
    fetchPosts()
      .then(posts => {
        return dispatch({ type: ADD_POSTS_SUCCESS, payload: posts });
      })
      .catch(error => dispatch({ type: ADD_POSTS_FAILURE, error }));
  };
};

export default fetchPostsAction;
