import React from 'react';
import { render } from 'react-dom';
import { meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MyHome from '../imports/ui/MyHome.jsx';

import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
	injectTapEventPlugin();
	render( renderRoutes(),document.getElementById('wraper'));
});