import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store';
import Layout from './views/layout';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Layout} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
