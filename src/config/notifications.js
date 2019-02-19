import i18n from './i18n';

export default {
	userUpdateError: {
		message: i18n.t('NOTIFICATION_UPDATE_USER_SETTINGS_FAIL', {
			defaultValue: 'Update user settings failed.',
		}),
		type: 'error',
		id: 'user-failed',
	},
};
