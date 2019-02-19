import extractUrlParam from './extractUrlParam';

describe('Should test extractUrlParam function', () => {
	it('should check without query string', () => {
		const param = extractUrlParam('lang');
		expect(param).toBeFalsy();
	});

	it('should check with query string', () => {
		Object.defineProperty(window.location, 'search', {
			writable: true,
			value: '?lang=en',
		});
		const param = extractUrlParam('lang');
		expect(param).toEqual('en');
	});

	it('should check with complex query string', () => {
		Object.defineProperty(window.location, 'search', {
			writable: true,
			value: '?asd&lang=fr&a=1&b=2&c=3',
		});
		const param = extractUrlParam('lang');
		expect(param).toEqual('fr');
	});
});
