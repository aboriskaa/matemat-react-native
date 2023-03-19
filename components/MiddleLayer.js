import { StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import InputLogin from './InputLogin';
import ButtonForLogin from './ButtonForLogin';
import InputPassword from './InputPassword';
import { http } from '../api/http';

import { useEffect, useState } from 'react';

function MiddleLayer({ style, setScreen, setSaveUser, setSaveToken }) {
	const [inputLogin, setInputLogin] = useState('');
	const [inputPass, setInputPass] = useState('');

	function getUser() {
		console.log(inputLogin, inputPass);
		console.log('start');
		http
			.post('api/v1/login', {
				email: inputLogin,
				password: inputPass,
				device_name: 'iphone',
			})
			.then((response) => {
				if (response.data.token != null) {
					http.interceptors.request.use(
						(config) => {
							const token = response.data.token;
							if (token) {
								config.headers.Authorization = `Bearer ${token}`;
							}
							return config;
						},
						(error) => {
							return Promise.reject(error);
						}
					);
					setSaveToken(response.data.token);
					setScreen('users');
				}
			})
			.catch((error) => {
				console.log(error);
			});
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
					<View style={styles.formLogin}>
						<Text style={styles.loginForm}>LOGIN FORM</Text>
						<InputLogin
							setInputLogin={setInputLogin}
							style={styles.materialHelperTextBox}
						></InputLogin>
						<InputPassword
							setInputPass={setInputPass}
							style={styles.materialHelperTextBox}
						></InputPassword>
						<ButtonForLogin
							handler={handleLogin}
							// onPress={handleLogin}
							style={styles.ButtonForLogin}
						/>
					</View>
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
});

export default MiddleLayer;
