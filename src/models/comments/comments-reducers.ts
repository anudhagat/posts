import {
  CommentsState,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_PENDING,
  CommentActionTypes,
  Comment,
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
      return {
        ...state,
        loading: false,
        error: null,
        comments: payload as { [id: number]: Comment },
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
