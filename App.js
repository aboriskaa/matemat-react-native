import { useState } from 'react';
import StartScreen from './screens/StartScreen.js';
import UsersScreen from './screens/UsersScreen.js';

export default function App() {
	const [screen, setScreen] = useState('start');
	const [saveToken, setSaveToken] = useState('');
	const [saveUser, setSaveUser] = useState([]);

	if (screen == 'start') {
		return (
			<StartScreen
				setScreen={setScreen}
				setSaveToken={setSaveToken}
				setSaveUser={setSaveUser}
			/>
		);
	}
	if (screen == 'users') {
		return (
			<UsersScreen
				setScreen={setScreen}
				saveToken={saveToken}
				saveUser={saveUser}
			/>
		);
	}
}
