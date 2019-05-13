import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNav from '../../components/header-nav';
import PostsView from '../posts-view';
import PostDetailView from '../post-detail-view';
import UserDetailView from '../user-detail-view';
import UsersView from '../users-view';

function Layout() {
  return (
    <div>
      <HeaderNav />
      <div>
        <Switch>
          <Route exact path="/" component={PostsView} />
          <Route path="/users" component={UsersView} />
          <Route path="/post/:postId" component={PostDetailView} />
          <Route path="/user/:userId" component={UserDetailView} />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
