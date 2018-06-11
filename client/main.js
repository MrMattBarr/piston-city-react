import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import { renderRoutes } from '../imports/startup/client/routes.js';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from '../imports/ui/menu.js';

import '../imports/less/app.less';
 
Meteor.startup(() => {
  const history = createBrowserHistory();
  render(renderRoutes(history), document.getElementById('app'));
  render(<Menu history={history}/>, document.getElementById('app-menu'));
});