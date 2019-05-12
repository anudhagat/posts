export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsState {
  comments: { [id: number]: Comment[] };
  loading: boolean;
  error: null | string;
}

// Describing the different ACTION NAMES available
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const FETCH_COMMENTS_PENDING = 'FETCH_COMMENTS_PENDING';

export interface FetchCommentsSuccessPayload {
  comments: Comment[];
  postId: number;
}
interface FetchCommentsSuccessAction {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: FetchCommentsSuccessPayload;
}

interface FetchCommentsFailureAction {
  type: typeof FETCH_COMMENTS_FAILURE;
  payload: string;
}

interface FetchCommentsPendingAction {
  type: typeof FETCH_COMMENTS_PENDING;
  payload: undefined;
}
export type CommentActionTypes =
  | FetchCommentsSuccessAction
  | FetchCommentsFailureAction
  | FetchCommentsPendingAction;
