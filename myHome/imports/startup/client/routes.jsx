import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

import MyHome from '../../ui/MyHome.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
  <Route path = '/'>
    <div>Index /</div>
  </Route>
  </Router>
	);