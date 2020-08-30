import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Issues from './pages/Issues';
import UserDetails from './pages/UserDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:user" component={UserDetails} />
        <Route path="/repository/:repository/issues" component={Issues} />
      </Switch>
    </BrowserRouter>
  );
}
