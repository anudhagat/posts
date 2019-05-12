import { combineReducers } from 'redux';
import postsReducer from './posts/posts-reducer';
import usersReducer from './users/users-reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
