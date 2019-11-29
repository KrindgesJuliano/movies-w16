import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './Pages/Search';
import Movies from './Pages/Movies';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/movies" component={Movies} />
        <Route path="" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
