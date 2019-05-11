import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNav from '../../components/header-nav';
import PostsView from '../posts-view';
import PostDetailView from '../post-detail-view';
import UserView from '../user-view';

function Layout() {
  return (
    <div>
      <HeaderNav />
      <div>
        <Switch>
          <Route exact path="/" component={PostsView} />
          <Route path="/user" component={UserView} />
          <Route path="/post" component={PostDetailView} />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
