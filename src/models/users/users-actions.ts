import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchUsers, fetchUserById } from '../../services/posts';
import {
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  ADD_USERS_PENDING,
  FETCH_USER_FAILURE,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
} from './types';
import arrayToObject from '../../utils';

export const fetchUsersAction = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return dispatch => {
    dispatch({ type: ADD_USERS_PENDING });
    fetchUsers()
      .then(users => {
        const UsersObjects = arrayToObject(users, 'id');
        return dispatch({ type: ADD_USERS_SUCCESS, payload: UsersObjects });
      })
      .catch(() =>
        dispatch({
          type: ADD_USERS_FAILURE,
          error: 'There was an error fetching users',
        }),
      );
  };
};

export const fetchUserByIdAction = (
  id: number,
): ThunkAction<void, AppState, null, Action<string>> => {
  return dispatch => {
    dispatch({ type: FETCH_USER_PENDING });
    fetchUserById(id)
      .then(user => {
        return dispatch({ type: FETCH_USER_SUCCESS, payload: user });
      })
      .catch(() =>
        dispatch({
          type: FETCH_USER_FAILURE,
          error: `There was an error fetching user with id ${id}`,
        }),
      );
  };
};
