import defaultUrls from './url.config';

class AppConfig {
	constructor() {
		this.URL = defaultUrls;
	}

	setUrlConfig(newUrls) {
		this.URL = { ...this.URL, ...newUrls };
	}
}

export default new AppConfig();
