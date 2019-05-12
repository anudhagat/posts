import {
  CommentsState,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_PENDING,
  CommentActionTypes,
  FetchCommentsSuccessPayload,
} from './types';

const initialState: CommentsState = {
  comments: {},
  loading: false,
  error: null,
};

function commentsReducer(
  state = initialState,
  action: CommentActionTypes,
): CommentsState {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COMMENTS_SUCCESS:
      const { postId, comments } = payload as FetchCommentsSuccessPayload;
      return {
        ...state,
        loading: false,
        error: null,
        comments: {
          ...state.comments,
          [postId]: comments,
        },
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    case FETCH_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default commentsReducer;
