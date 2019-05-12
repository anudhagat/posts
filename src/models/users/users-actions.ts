import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { fetchUsers } from '../../services/posts';
import {
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  ADD_USERS_PENDING,
} from './types';
import arrayToObject from '../../utils';

const fetchUsersAction = (): ThunkAction<
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
      .catch(error => dispatch({ type: ADD_USERS_FAILURE, error }));
  };
};

export default fetchUsersAction;
