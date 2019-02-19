import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Root from '../Root/Root';

import I18N_DOMAIN_APP from '../../config/constants';

const NotFoundContainer = props => (
	<Root>
		<div>NotFound </div>
	</Root>
);

NotFoundContainer.propTypes = {
	t: PropTypes.func,
};

export default connect()(
	translate(I18N_DOMAIN_APP)(NotFoundContainer)
);

