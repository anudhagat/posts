import { combineReducers } from 'redux';
import postsReducer from './posts/posts-reducer';
import usersReducer from './users/users-reducer';
import commentsReducer from './comments/comments-reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
