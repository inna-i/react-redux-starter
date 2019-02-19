import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import HeaderBarContainer from './HeaderBarContainer';

const i18nMock = {
	options: {},
	getFixedT: jest.fn(),
	loadNamespaces: jest.fn(),
	on: jest.fn(),
};

const base = {
	applications: ['STUDIO', 'TIPAAS', 'TMC', 'TDP', 'TDC', 'TDS', 'DSS'],
	meProfile: {
		id: 'id',
		meta: {
			created: '2017-09-25T08:41:44.974Z',
			lastModified: '2017-11-10T13:45:16.806Z',
			location: '/Users/a0317acd-8478-4e7d-b17a-cd84782e7df6',
			resourceType: 'USER',
		},
		schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
		userName: 'admin@tmc.talend.com',
		name: {
			formatted: 'Chew Bacca',
			familyName: 'Bacca',
			givenName: 'Chew',
		},
		timezone: 'Africa/Addis_Ababa',
		active: true,
		emails: [{
			value: 'admin@tmc.talend.com',
			display: 'admin@tmc.talend.com',
			type: 'work',
			primary: true,
		}],
		groups: [{
			value: '96c5e8b4-9c34-454e-85e8-b49c34f54eff',
			display: 'dddddd',
			type: 'direct',
			ref: '/Groups/96c5e8b4-9c34-454e-85e8-b49c34f54eff',
		}, {
			value: '9a0b56f6-044e-43fd-8b56-f6044e53fd57',
			display: 'Test',
			type: 'direct',
			ref: '/Groups/9a0b56f6-044e-43fd-8b56-f6044e53fd57',
		}, {
			value: 'c5c0368e-2d8c-45f1-8036-8e2d8ce5f10a',
			display: 'GroupD',
			type: 'direct',
			ref: '/Groups/c5c0368e-2d8c-45f1-8036-8e2d8ce5f10a',
		}, {
			value: 'd6c7f925-8785-4e32-87f9-258785de32ef',
			display: 'Administrators',
			type: 'direct',
			ref: '/Groups/d6c7f925-8785-4e32-87f9-258785de32ef',
		}],
		roles: [{
			value: 'ffc262b0-f5dc-42ac-8262-b0f5dcd2ac1a',
			entitlements: [{
				value: 'TDP_DATASET_CERTIFY',
				display: 'TDP_DATASET_CERTIFY',
				type: 'direct',
				primary: false,
			}, {
				value: 'TDP_TCOMP_USE',
				display: 'TDP_TCOMP_USE',
				type: 'direct',
				primary: false,
			}, {
				value: 'TDP_DATASET_PERFORM_LIVE',
				display: 'TDP_DATASET_PERFORM_LIVE',
				type: 'direct',
				primary: false,
			}, {
				value: 'TDP_FULL_RUN_PERFORM',
				display: 'TDP_FULL_RUN_PERFORM',
				type: 'direct',
				primary: false,
			}, {
				value: 'TDP_PREP_VERSION_CREATE',
				display: 'TDP_PREP_VERSION_CREATE',
				type: 'direct',
				primary: false,
			}],
			display: 'Administrator',
			type: 'direct',
			primary: false,
			ref: '/Roles/ffc262b0-f5dc-42ac-8262-b0f5dcd2ac1a',
		}, {
			value: '9cb2be4d-be02-4968-b2be-4dbe02796829',
			entitlements: [{
				value: 'TIPAAS_ENTITLEMENT_ACCOUNTADMIN',
				display: 'TIPAAS_ENTITLEMENT_ACCOUNTADMIN',
				type: 'direct',
				primary: false,
			}],
			display: 'Administrator',
			type: 'direct',
			primary: false,
			ref: '/Roles/9cb2be4d-be02-4968-b2be-4dbe02796829',
		}, {
			value: '9c93fe07-92a0-4706-93fe-0792a07706ec',
			entitlements: [{
				value: 'TDP_BASIC',
				display: 'TDP_BASIC',
				type: 'direct',
				primary: false,
			}],
			display: 'Data Preparator',
			type: 'direct',
			primary: false,
			ref: '/Roles/9c93fe07-92a0-4706-93fe-0792a07706ec',
		}, {
			value: 'f69f65cd-1b49-4ec9-9f65-cd1b491ec937',
			entitlements: [{
				value: 'TDP_TCOMP_USE',
				display: 'TDP_TCOMP_USE',
				type: 'direct',
				primary: false,
			}, {
				value: 'TDP_FULL_RUN_PERFORM',
				display: 'TDP_FULL_RUN_PERFORM',
				type: 'direct',
				primary: false,
			}],
			display: 'Dataset Manager',
			type: 'direct',
			primary: false,
			ref: '/Roles/f69f65cd-1b49-4ec9-9f65-cd1b491ec937',
		}, {
			value: 'c35c4d84-060b-4679-9c4d-84060bf67908',
			entitlements: [{
				value: 'STUDIO_ENTITLEMENT_STUDIO_DEVELOPER',
				display: 'STUDIO_ENTITLEMENT_STUDIO_DEVELOPER',
				type: 'direct',
				primary: false,
			}],
			display: 'Integration Developer',
			type: 'direct',
			primary: false,
			ref: '/Roles/c35c4d84-060b-4679-9c4d-84060bf67908',
		}, {
			value: 'bf6a4fc7-6c42-4744-aa4f-c76c42e744fa',
			entitlements: [{
				value: 'TMC_PROJECT_MANAGEMENT',
				display: 'TMC_PROJECT_MANAGEMENT',
				type: 'direct',
				primary: false,
			}, {
				value: 'TMC_CONFIGURATION_NEXUS_USERLIBS',
				display: 'TMC_CONFIGURATION_NEXUS_USERLIBS',
				type: 'direct',
				primary: false,
			}],
			display: 'Project Administrator',
			type: 'direct',
			primary: false,
			ref: '/Roles/bf6a4fc7-6c42-4744-aa4f-c76c42e744fa',
		}, {
			value: '54fbd08c-9af6-4182-bbd0-8c9af691827c',
			display: 'a ',
			type: 'direct',
			primary: false,
			ref: '/Roles/54fbd08c-9af6-4182-bbd0-8c9af691827c',
		}, {
			value: '7da58230-87b1-4dc2-a582-3087b15dc231',
			entitlements: [{
				value: 'TIPAAS_ENTITLEMENT_AUTHENTICATED',
				display: 'TIPAAS_ENTITLEMENT_AUTHENTICATED',
				type: 'direct',
				primary: false,
			}],
			display: 'Operator',
			type: 'direct',
			primary: false,
			ref: '/Roles/7da58230-87b1-4dc2-a582-3087b15dc231',
		}, {
			value: '203bbfa2-9e8a-479f-bbbf-a29e8ac79f83',
			entitlements: [{
				value: 'TMC_ROLE_MANAGEMENT',
				display: 'TMC_ROLE_MANAGEMENT',
				type: 'direct',
				primary: false,
			}, {
				value: 'TMC_USER_MANAGEMENT',
				display: 'TMC_USER_MANAGEMENT',
				type: 'direct',
				primary: false,
			}, {
				value: 'TMC_GROUP_MANAGEMENT',
				display: 'TMC_GROUP_MANAGEMENT',
				type: 'direct',
				primary: false,
			}, {
				value: 'TMC_SUBSCRIPTION_MANAGEMENT',
				display: 'TMC_SUBSCRIPTION_MANAGEMENT',
				type: 'direct',
				primary: false,
			}, {
				value: 'TMC_POLICY_PASSWORD',
				display: 'TMC_POLICY_PASSWORD',
				type: 'direct',
				primary: false,
			}],
			display: 'Security Administrator',
			type: 'direct',
			primary: false,
			ref: '/Roles/203bbfa2-9e8a-479f-bbbf-a29e8ac79f83',
		}],
		lastSetPasswordDate: 1506328904542,
		entitlements: [{
			value: 'TIPAAS_ENTITLEMENT_AUTHENTICATED',
			display: 'TIPAAS_ENTITLEMENT_AUTHENTICATED',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_ROLE_MANAGEMENT',
			display: 'TMC_ROLE_MANAGEMENT',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_SUBSCRIPTION_MANAGEMENT',
			display: 'TMC_SUBSCRIPTION_MANAGEMENT',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_DATASET_PERFORM_LIVE',
			display: 'TDP_DATASET_PERFORM_LIVE',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_USER_MANAGEMENT',
			display: 'TMC_USER_MANAGEMENT',
			type: 'direct',
			primary: false,
		}, {
			value: 'STUDIO_ENTITLEMENT_STUDIO_DEVELOPER',
			display: 'STUDIO_ENTITLEMENT_STUDIO_DEVELOPER',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_DATASET_CERTIFY',
			display: 'TDP_DATASET_CERTIFY',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_POLICY_PASSWORD',
			display: 'TMC_POLICY_PASSWORD',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_PREP_VERSION_CREATE',
			display: 'TDP_PREP_VERSION_CREATE',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_PROJECT_MANAGEMENT',
			display: 'TMC_PROJECT_MANAGEMENT',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_FULL_RUN_PERFORM',
			display: 'TDP_FULL_RUN_PERFORM',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_TCOMP_USE',
			display: 'TDP_TCOMP_USE',
			type: 'direct',
			primary: false,
		}, {
			value: 'TIPAAS_ENTITLEMENT_ACCOUNTADMIN',
			display: 'TIPAAS_ENTITLEMENT_ACCOUNTADMIN',
			type: 'direct',
			primary: false,
		}, {
			value: 'TDP_BASIC',
			display: 'TDP_BASIC',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_GROUP_MANAGEMENT',
			display: 'TMC_GROUP_MANAGEMENT',
			type: 'direct',
			primary: false,
		}, {
			value: 'TMC_CONFIGURATION_NEXUS_USERLIBS',
			display: 'TMC_CONFIGURATION_NEXUS_USERLIBS',
			type: 'direct',
			primary: false,
		}],
	},
	config: {
		TDP: 'https://talend-cloud-integration-tdp.datapwn.com/',
		TDS: 'https://talend-cloud-integration-tds.datapwn.com/',
		DSS: '/api/dss',
		IDP: '/api/idp',
		IAM: '/api/iam-server',
		TMC: 'https://talend-cloud-integration-tmc.datapwn.com/',
		LOGGING: 'https://talend-cloud-integration-tpsvc-logging.datapwn.com',
		DataStreams: 'http://localhost:8080',
		TIC: 'https://frontend-talend-cloud-integration-us-east-1.datapwn.com/ipaas',
		HELP: 'https://help.talend.com/access/sources/CLOUD/topic?pageid=tic_architecture&afs:lang=en&EnrichVersion=Cloud',
		COMMUNITY: 'https://community.talend.com/',
		PlayListTic: '/v1/landing/ticPlaylist',
		PlayListDataPrep: '/v1/landing/dataPrepPlaylist',
		PlayListTDS: '/v1/landing/tdsPlaylist',
		RSS: '/v1/landing/news',
		LOGOUT: '/logout',
		ME: '/api/scim/me',
		SUPPORT: 'https://www.talend.com/services/technical-support/',
		PendoApiKey: '607d926e-19bf-4f39-575d-58aed1b24a6d',
		PendoActivated: 'true',
		Region: 'us-east-1',
		PendoCloudProvider: 'AWS',
		TDPIsReady: 'Yes',
		TDSIsReady: 'No',
	},
};


describe('Header bar container test', () => {
	const mockStore = configureMockStore();

	it('Should check HeaderBar with default state', () => {
		const store = mockStore({ base });
		const wrapper = shallow(<HeaderBarContainer store={store} t={key => key} i18n={i18nMock} />)
			.dive().dive();
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
