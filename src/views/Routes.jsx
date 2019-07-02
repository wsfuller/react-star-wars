import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import Films from './Films';
import FilmProfile from './FilmProfile';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/people" exact component={DataListContainer} />
    <Route path="/people/profile/:id" exact component={PeopleProfile} /> */}
    <Route path="/films" exact component={Films} />
    <Route path="/films/:id" exact component={FilmProfile} />
    {/* <Route path="/starships" exact component={StarshipsList} />
    <Route path="/vehicles" exact component={VehiclesList} />
    <Route path="/species" exact component={SpeciesList} />
    <Route path="/planets" exact component={PlanetsList} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default routes;
