import getCookie from './getCookie';

describe('Test for getCookie', () => {
	it('should test getCookie', () => {
		Object.defineProperty(document, 'cookie', {
			writable: true,
			value: 'key=test',
		});

		expect(getCookie('key')).toEqual('test');

		// second case
		Object.defineProperty(document, 'cookie', {
			writable: true,
			value: '',
		});

		expect(getCookie('key')).toEqual('');
	});
});
