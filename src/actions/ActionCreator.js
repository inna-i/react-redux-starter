import fetchWrapper from './fetchWrapper';
import notifications from '../config/notifications';

import ACTIONS from './Actions';


const shouldBeOk = response => {
	if (response.ok && response.status < 400) {
		return response;
	}
	throw new Error(response);
};

const getLanguage = () => {
	let lang = 'ru';
	if (window.navigator.language.includes('en')) {
		lang = 'en';
	}
	return lang;
};

export default class Action {
	static hideNotification(notification) {
		return {
			type: ACTIONS.HIDE_NOTIFICATION,
			payload: notification,
		};
	}

	static showNotification(message) {
		return {
			type: ACTIONS.SHOW_NOTIFICATION,
			payload: message,
		};
	}

	// user settings
	static getUserSettings(id) {
		return (dispatch, getState) => {
			fetchWrapper(`${getState().base.config.API}/users/${id}`, { credentials: 'same-origin' })
				.then(response => response.json())
				.then(resp => dispatch(this.getUserSettingsSuccess(resp)))
				.catch(ex => {
					dispatch(this.getUserSettingsFail(ex.message));
				});
			return {
				type: ACTIONS.GET_USER_SETTINGS,
			};
		};
	}
	static getUserSettingsSuccess(userData) {
		return {
			type: ACTIONS.GET_USER_SETTINGS_SUCCESS,
			payload: userData,
		};
	}
	static getUserSettingsFail() {
		return {
			type: ACTIONS.GET_USER_SETTINGS_FAILED,
		};
	}

	// categories settings
	static getCategories() {
		return (dispatch, getState) => {
			fetchWrapper(`${getState().base.config.API}/categories`, { credentials: 'same-origin' })
				.then(response => response.json())
				.then(resp => dispatch(this.getCategoriesSuccess(resp)))
				.catch(ex => {
					dispatch(this.getUserSettingsFail(ex.message));
				});
			return {
				type: ACTIONS.GET_CATEGORIES,
			};
		};
	}
	static getCategoriesSuccess(resp) {
		return {
			type: ACTIONS.GET_CATEGORIES_SUCCESS,
			payload: resp,
		};
	}
	static getCategoriesFail() {
		return {
			type: ACTIONS.GET_CATEGORIES_FAIL,
		};
	}

	static updateUserSettings() {
		return (dispatch, getState) => {
			const baseState = getState().base;
			const profile = baseState.meProfile;
			let lang = profile.preferredLanguage;
			if (!lang) {
				lang = getLanguage();
			}

			const userData = {
				...baseState.userData,
				preferredLanguage: lang,
			};
			const url = `${baseState.config.API}/users/${profile.id}`;
			const options = {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				credentials: 'same-origin',
				body: JSON.stringify(userData),
			};
			fetchWrapper(url, options)
				.then(shouldBeOk)
				.then(dispatch(this.updateUserSettingsSuccess))
				.then(() => dispatch(this.getMeProfile()))
				.catch(() => {
					dispatch(this.updateUserSettingsFail());
					dispatch(this.showNotification(notifications.userUpdateError));
				});
			return {
				type: ACTIONS.UPDATE_USER_SETTINGS,
			};
		};
	}

	static updateUserSettingsSuccess() {
		return {
			type: ACTIONS.UPDATE_USER_SETTINGS_SUCCESS,
		};
	}
	static updateUserSettingsFail() {
		return {
			type: ACTIONS.UPDATE_USER_SETTINGS_FAILED,
		};
	}

	static languageChanged() {
		return {
			type: ACTIONS.LANGUAGE_CHANGED,
		};
	}

	// tutorial guide
	static goBack() {
		return {
			type: ACTIONS.GO_BACK,
		};
	}


}
