import { StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { http } from '../api/http';

import { useEffect, useState } from 'react';

function Users({ setScreen, saveToken, style }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [created_at, setCreated_at] = useState('');

	useEffect(() => {
		getUser();
	}, []);

	async function getUser() {
		try {
			if (saveToken) {
				console.log(saveToken);
				http.interceptors.request.use(
					(config) => {
						const token = saveToken;

						if (token) {
							config.headers.Authorization = `Bearer ${token}`;
						}
						return config;
					},
					(error) => {
						return Promise.reject(error);
					}
				);
			}
			http
				.get('/api/v1/user')
				.then((response) => {
					console.log(response.data);
					setName(response.data.name);
					setCreated_at(response.data.created_at);
					setEmail(response.data.email);
				})
				.catch((error) => {
					console.log(error);
				});

			// console.log('login=', login);
		} catch (e) {
			if (e.response.data) {
				console.log(e.response.data);
			}

			// setErrors([e.response.data.errors]);
		}
	}

	function handleLogin() {
		getUser();
	}

	return (
		<View style={[styles.container, style]}>
			<View style={styles.scrollArea}>
				<ScrollView
					horizontal={false}
					contentContainerStyle={styles.scrollArea_contentContainerStyle}
				>
					<Text style={styles.text_list}>{name}</Text>
					<Text style={styles.text_list}>{email}</Text>
					<Text style={styles.text_list}>{created_at}</Text>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	scrollArea: {
		backgroundColor: 'rgba(6,182,212,1)',
		borderRadius: 14,
		flex: 1,
	},
	scrollArea_contentContainerStyle: {
		overflow: 'scroll',
		alignSelf: 'center',
	},

	formLogin: {
		width: '85%',
		marginTop: 108,
		alignSelf: 'center',
	},

	loginForm: {
		color: 'rgba(236,254,255,1)',
		fontSize: 18,
		marginTop: -44,
		textAlign: 'center',
		alignSelf: 'center',
	},
	materialHelperTextBox: {
		height: 90,
		marginTop: 22,
		alignSelf: 'center',
	},
	ButtonForLogin: {
		marginTop: 30,
		marginBottom: 30,
		alignSelf: 'center',
	},
	text_list: {
		color: 'rgba(236,254,255,1)',
		textAlign: 'center',
		fontSize: 26,
		marginTop: 50,
		alignSelf: 'center',
	},
});

export default Users;
