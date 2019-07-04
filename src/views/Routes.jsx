import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import Films from './Films';
import FilmProfile from './FilmProfile';
import Characters from './Characters';
import CharacterProfile from './CharacterProfile';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/films" exact component={Films} />
    <Route path="/films/:id" exact component={FilmProfile} />
    <Route path="/characters" exact component={Characters} />
    <Route path="/characters/:id" exact component={CharacterProfile} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
