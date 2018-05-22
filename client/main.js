import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import { renderRoutes } from '../imports/startup/client/routes.js';
import '../imports/less/app.less';
 
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});