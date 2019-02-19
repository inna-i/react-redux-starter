import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import I18N_DOMAIN_APP from '../../config/constants';

const HeaderBarContainer = ({ 
	title,
	menu,
}) => (
	<div>
		<header> {title} </header>
		{ menu && menu.map(item => <span>{item.title}</span>)}
	</div>
);

HeaderBarContainer.propTypes = {
	menu: PropTypes.array,
	title: PropTypes.string,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
	translate(I18N_DOMAIN_APP)(HeaderBarContainer)
);
