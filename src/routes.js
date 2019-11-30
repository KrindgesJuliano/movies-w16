import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Movies from './Pages/Movies';
import Discover from './Pages/Discover';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movies/:name" component={Movies} />
        <Route path="/discover/" component={Discover} />
        <Route path="" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
