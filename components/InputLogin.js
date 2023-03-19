import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function InputLogin(props) {
	const handleInputChange = (text) => {
		props.setInputLogin(text);
	};
	return (
		<View style={[styles.container, props.style]}>
			<Text style={styles.eMail}>E-Mail</Text>
			<TextInput
				onChangeText={handleInputChange}
				keyboardType='email-address'
				placeholder='Email'
				style={styles.inputStyle}
			></TextInput>
			<Text style={styles.helper}></Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
	},
	eMail: {
		fontSize: 18,
		textAlign: 'left',
		color: 'rgba(236,254,255,1)',
		opacity: 0.6,
	},
	inputStyle: {
		textDecorationColor: 'rgba(236,254,255,1)',
		borderBottomWidth: 1,
		borderColor: 'rgba(236,254,255,1)',
		color: 'rgba(236,254,255,1)',
		fontSize: 16,
		alignSelf: 'stretch',
		lineHeight: 16,
		paddingTop: 8,
		flex: 1,
		paddingBottom: 8,
		width: 200,
	},
	helper: {
		fontSize: 12,
		textAlign: 'left',
		color: 'yellow',
		opacity: 0.6,
		paddingTop: 8,
	},
});
