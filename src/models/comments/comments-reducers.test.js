import comments from '../../../tests/mock-comments';
import commentsReducer from './comments-reducers';
import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_PENDING,
} from './types';

describe('comments-reducer>', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      comments: {},
      loading: false,
      error: null,
    };
  });

  it('returns initial state if no action', () => {
    const state = commentsReducer({}, '');
    expect(state).toEqual({});
  });

  it('returns comments on FETCH_COMMENTS_SUCCESS', () => {
    const state = commentsReducer(initialState, {
      type: FETCH_COMMENTS_SUCCESS,
      payload: { comments, postId: 1 },
    });
    expect(state).toEqual({
      comments: {
        '1': [...comments],
      },
      error: null,
      loading: false,
    });
  });

  it('returns error FETCH_COMMENTS_FAILURE', () => {
    const state = commentsReducer(initialState, {
      type: FETCH_COMMENTS_FAILURE,
      payload: 'error message',
    });
    expect(state).toEqual({
      comments: {},
      error: 'error message',
      loading: false,
    });
  });

  it('returns error FETCH_COMMENTS_PENDING', () => {
    const state = commentsReducer(initialState, {
      type: FETCH_COMMENTS_PENDING,
    });
    expect(state).toEqual({
      comments: {},
      error: null,
      loading: true,
    });
  });
});
