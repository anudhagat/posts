import {
  UsersState,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  ADD_USERS_PENDING,
  UserActionTypes,
  User,
} from './types';

const initialState: UsersState = {
  users: {},
  loading: false,
  error: null,
};

function usersReducer(
  state = initialState,
  action: UserActionTypes,
): UsersState {
  const { type, payload } = action;
  switch (type) {
    case ADD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: payload as { [id: number]: User },
      };
    case ADD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    case ADD_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default usersReducer;
