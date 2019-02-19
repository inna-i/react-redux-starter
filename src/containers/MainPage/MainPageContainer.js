import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import I18N_DOMAIN_APP from '../../config/constants';
import Root from '../Root/Root';

const MainPageContainer = ({ t }) => (
	<Root>
		<div>Main</div>
		<h1>{t('TITLE', { defaultValue: 'Main h1 title' })}</h1>
		<h2>{t('LABEL', { defaultValue: 'Coming soon' })}</h2>
	</Root>
);


MainPageContainer.propTypes = {
	config: PropTypes.object,
	lang: PropTypes.string,
	t: PropTypes.func,
};

const mapStateToProps = ({ base }) => ({
	config: base.config,
	lang: base.meProfile && base.meProfile.preferredLanguage,
});

export default translate(I18N_DOMAIN_APP)(connect(mapStateToProps)(MainPageContainer));
