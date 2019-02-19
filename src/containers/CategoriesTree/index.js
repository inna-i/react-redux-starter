import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import ActionCreator from '../../actions/ActionCreator';

import I18N_DOMAIN_APP from '../../config/constants';

import Header from '../Header/HeaderBarContainer';

import './tree.sass';

class CategoriesTree extends React.Component {
	componentDidMount() {
		if (!this.props.categories) {
			this.props.loadCategories();
		}
	}

	render() {
		return (
			<div>
				<Header title="Categories" menu={this.props.categories} />
				<div>Tree will be there </div>
			</div>
		);
	}
}

CategoriesTree.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
	loadCategories: PropTypes.func,
};

const mapStateToProps = ({ base, routing }) => ({
	categories: base.categories,
	locations: routing.locationBeforeTransitions,
});

const mapDispatchToProps = dispatch => ({
	loadCategories: () => dispatch(ActionCreator.getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
	translate(I18N_DOMAIN_APP)(CategoriesTree)
);
