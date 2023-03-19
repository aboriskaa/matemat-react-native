import axios from 'axios';

export const http = axios.create({
	baseURL: 'https://aboriska.link/',
	// headers: {
	// 	'X-Requested-With': 'XMLHttpRequest',
	// },
	// withCredentials: true,
});
