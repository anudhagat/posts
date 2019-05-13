import {
  PostsState,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
  ADD_POSTS_PENDING,
  FETCH_POST_FAILURE,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  PostActionTypes,
  Post,
} from './types';

const initialState: PostsState = {
  posts: {},
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
        posts: payload as { [id: number]: Post },
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

    case FETCH_POST_SUCCESS: {
      const post = payload as Post;
      return {
        ...state,
        loading: false,
        error: null,
        posts: {
          ...state.posts,
          [post.id]: post,
        },
      };
    }

    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };

    case FETCH_POST_PENDING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

export default postsReducer;
