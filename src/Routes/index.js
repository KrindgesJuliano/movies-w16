import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../Pages/Main';
import MoviesDetails from '../Pages/MoviesDetails';
import Discover from '../Pages/Discover';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movies/:name" component={MoviesDetails} />
        <Route path="/discover/" component={Discover} />
        <Route path="" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
