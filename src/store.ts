import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './models/reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [thunk];
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const store = createStoreWithMiddleware(createStore)(
    rootReducer,
    initialState,
  );

  const anyModule = module as any;
  if (anyModule.hot) {
    anyModule.hot.accept('./models/reducers', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./models/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
