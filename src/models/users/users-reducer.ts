import {
  UsersState,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  ADD_USERS_PENDING,
  FETCH_USER_FAILURE,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
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

    case FETCH_USER_SUCCESS: {
      const user = payload as User;
      return {
        ...state,
        loading: false,
        error: null,
        users: {
          ...state.users,
          [user.id]: user,
        },
      };
    }

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };

    case FETCH_USER_PENDING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

export default usersReducer;
