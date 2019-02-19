import i18n from 'i18next'; // eslint-disable-line import/no-named-as-default-member
import XHR from 'i18next-xhr-backend';
import LangDetector from 'i18next-browser-languagedetector';

import I18N_DOMAIN_APP from './constants';

i18n // eslint-disable-line import/no-named-as-default-member
	.use(XHR)
	.use(LangDetector)
	.init({
		fallbackLng: {
			default: ['ru'],
		},
		debug: false,

		interpolation: {
			escapeValue: false, // not needed for react!!
		},
		ns: I18N_DOMAIN_APP,
		defaultNS: I18N_DOMAIN_APP,
		// react i18next special options (optional)
		react: {
			wait: false, // set to true if you like to wait for loaded in every translated hoc
			nsMode: 'default', // set it to fallback to let passed namespaces to translated hoc act as fallbacks
		},
		detection: {
			// order and from where user language should be detected
			order: ['querystring', 'cookie'],

			// keys or params to lookup language from
			lookupQuerystring: 'lang',
			lookupCookie: 'i18next',

			// cache user language on
			caches: ['cookie'],

			// optional expire and domain for set cookie
			cookieMinutes: 30,
			cookieDomain: document.domain,
		},
		saveMissingPlurals: true,
		updateMissing: false,
	});

export default i18n;
