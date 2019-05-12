import {
  PostsState,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
  ADD_POSTS_PENDING,
  PostActionTypes,
  Post,
} from './types';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

function postsReducer(
  state = initialState,
  action: PostActionTypes,
): PostsState {
  const { type, payload } = action;
  switch (type) {
    case ADD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: payload as Post[],
      };
    case ADD_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    case ADD_POSTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default postsReducer;
