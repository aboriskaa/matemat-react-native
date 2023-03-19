const URI = 'https://aboriska.link';

export default {
	async getData() {
		try {
			let response = await fetch(URI + '/api/v1');
			let responseJsonData = await response.json();
			return responseJsonData;
		} catch (e) {
			return e;
		}
	},
};
