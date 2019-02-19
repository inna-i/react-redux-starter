import Actions from '../actions/Actions';

const defaultState = config => ({
	config: config.URL,
	errorMessage: '',
	userData: null,
	userPasswords: {},
	isFetching: false,
	isLanguageChanged: false,
	isSavedSuccess: false,
	categories: null,
});


const base = config => (state = defaultState(config), action = { type: '' }) => {
	switch (action.type) {
		case Actions.GET_USER_SETTINGS_SUCCESS:
			return { ...state, userData: action.payload };
		case Actions.UPDATE_USER_SETTINGS:
			return { ...state, isFetching: true };
		case Actions.UPDATE_USER_SETTINGS_FAILED:
			return { ...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		case Actions.UPDATE_USER_SETTINGS_SUCCESS:
			return { ...state,
				isFetching: false,
				isSavedSuccess: true,
				errorMessage: '',
			};
		case Actions.LANGUAGE_CHANGED: {
			return { ...state, isLanguageChanged: action.payload };
		}
		case Actions.GO_BACK: {
			return { ...state, selectedKey: 'step1' };
		}
		case Actions.SHOW_NOTIFICATION: {
			return { ...state,
				notifications: [action.payload],
			};
		}
		case Actions.HIDE_NOTIFICATION: {
			return { ...state, notifications: [] };
		}
		case Actions.GET_CATEGORIES_SUCCESS: {
			return { ...state, categories: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default base;
