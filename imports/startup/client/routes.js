import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import HomePage from '../../ui/homePage.js';
import DataCorruptionPage from '../../ui/dataCorruptionPage.js';
import BeatdownPage from '../../ui/beatdown/page.js';
import BeatdownRulesPage from '../../ui/beatdown/rules/page.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/beatdown" component={BeatdownPage}/>
      <Route path="/beatdown/rules" component={BeatdownRulesPage}/>
      <Route path="/data-corruption" component={DataCorruptionPage}/>
      <Route path="/home" component={HomePage}/>
      <Route component={BeatdownPage}/>
    </Switch>
  </Router>
);