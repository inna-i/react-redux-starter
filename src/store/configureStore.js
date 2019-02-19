import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

export default function configureStore(reducers) {
	const middleware = [thunkMiddleware, promise()];

	if (process.env.NODE_ENV !== 'production') {
		middleware.push(createLogger());

		/* eslint-disable */
		console.info('%c Redux development tools enabled,\n More details here: https://github.com/zalmoxisus/redux-devtools-extension ', 'background: #F1FEA4; color: #151680');
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		return createStore(reducers, /* preloadedState, */ composeEnhancers(
			applyMiddleware(...middleware)
		));
		/* eslint-enable */
	}

	return applyMiddleware(...middleware)(createStore)(reducers);
}

