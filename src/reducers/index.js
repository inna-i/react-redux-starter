import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import base from './base';

const reducers = config => combineReducers({
	base: base(config),
	routing: routerReducer,
});

export default reducers;
