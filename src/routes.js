import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import UserDetails from './pages/UserDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:user" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}
