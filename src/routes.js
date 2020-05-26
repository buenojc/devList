import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Details from './pages/Details';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/repositories' component={Repositories} />
          <Route path='/details' component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
