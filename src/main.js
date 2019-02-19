import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import config from './config/config';
import App from './app';
import i18n from './config/i18n';
import extractUrlParam from './utils/extractUrlParam';
import getCookie from './utils/getCookie';
import './index.html';
import './style/main.sass';

const logError = e => console.warn(e.message, e);

if (process.env.NODE_ENV !== 'production') {
	console.clear(); // eslint-disable-line no-console
	console.info('%c Portal started ', 'background: #F1FEA4; color: #151680');
}

const checkStatus = response => {
	if (!response.ok || response.status >= 400) {
		throw new Error(`${response.url} is unavailable`);
	}
	return response;
};

const overrideLocale = () => {
	const lang = extractUrlParam('lang') || getCookie('i18next') || 'en';
	if (lang) {
		i18n.changeLanguage(lang);
	}
};

const loadApiPath = fetch('/v1/config/api-paths', { credentials: 'same-origin' })
	.then(checkStatus)
	.then(resp => resp.json())
	.then(urlConfig => config.setUrlConfig(urlConfig))
	.catch(logError);

Promise.all([loadApiPath])
	.then(() => {
		ReactDOM.render(
			<App />,
			document.getElementById('app'));
	})
	.catch(logError);

overrideLocale();

