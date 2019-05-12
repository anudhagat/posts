// Describing the shape of the post's slice of state
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: null | string;
}

// Describing the different ACTION NAMES available
export const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS';
export const ADD_POSTS_FAILURE = 'ADD_POSTS_FAILURE';
export const ADD_POSTS_PENDING = 'ADD_POSTS_PENDING';

interface AddPostsSuccessAction {
  type: typeof ADD_POSTS_SUCCESS;
  payload: Post[];
}

interface AddPostsFailureAction {
  type: typeof ADD_POSTS_FAILURE;
  payload: string;
}

interface AddPostsPendingAction {
  type: typeof ADD_POSTS_PENDING;
  payload: undefined;
}
export type PostActionTypes =
  | AddPostsSuccessAction
  | AddPostsFailureAction
  | AddPostsPendingAction;
