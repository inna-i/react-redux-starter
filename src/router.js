import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import modules from './config/modules';

function getRoute(module) {
	return <Route key={module.path} {...module} />;
}

const router = store => (
	<Router history={syncHistoryWithStore(browserHistory, store)}>
		{modules.map(getRoute)}
	</Router>
);

export default router;

