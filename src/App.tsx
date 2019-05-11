import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store';
import PostsView from './views/posts-view';
import PostDetailView from './views/post-detail-view';
import UserView from './views/user-view';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={PostsView} />
          <Route path="/user" component={UserView} />
          <Route path="/post" component={PostDetailView} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
