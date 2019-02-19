import React from 'react';
import { shallow } from 'enzyme';
import { translate } from 'react-i18next';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage tests', () => {
	it('Should render default NotFoundPage', () => {
		const wrapper = shallow(
			<NotFoundPage t={translate()} />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
	it('Should render NotFoundPage with params', () => {
		const wrapper = shallow(
			<NotFoundPage
				t={translate()}
				status="001"
				error="Not Found Error"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});

