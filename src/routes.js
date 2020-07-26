import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Details from './pages/Details';
import notFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/repositories/:id' component={Repositories} />
        <Route path='/details/:id/:repo' component={Details} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  );
}
