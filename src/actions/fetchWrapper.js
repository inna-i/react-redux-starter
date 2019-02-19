import fetch from 'isomorphic-fetch';
import config from '../config/url.config';

const UNAUTHORIZED = 401;

const handleErrors = response => {
	if (response.status === UNAUTHORIZED) {
		window.open(config.LOGOUT, '_self');
	}
	return response;
};

const fetchWrapper = (url, options = {}) => (
	fetch(url, options).then(handleErrors)
);

export default fetchWrapper;
