import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import router from './router';

import reducers from './reducers';
import configureStore from './store/configureStore';
import config from './config/config';

const App = () => {
	const store = configureStore(reducers(config));
	return (
		<I18nextProvider i18n={i18n}>
			<Provider store={store}>
				<div>
					{router(store)}
				</div>
			</Provider>
		</I18nextProvider>
	);
};

export default App;
