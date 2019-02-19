import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import I18N_DOMAIN_APP from '../../config/constants';


const Root = ({ children, t }) => (
	<div className="w-landing-content">
		<h1>{t('TITLE', { defaultValue: 'Main h1 title' })}</h1>
		<h2>{t('LABEL', { defaultValue: 'Coming soon' })}</h2>
		{ children }
	</div>
);

Root.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	t: PropTypes.func,
};

const mapStateToProps = ({ routing }) => ({
	locations: routing.locationBeforeTransitions,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
	translate(I18N_DOMAIN_APP)(Root)
);
