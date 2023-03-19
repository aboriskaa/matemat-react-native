import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function InputPassword(props) {
	return (
		<View style={[styles.container, props.style]}>
			<Text style={styles.eMail}>Password</Text>
			<TextInput
				secureTextEntry={true}
				placeholder='Password'
				style={styles.inputStyle}
			></TextInput>
			<Text style={styles.helper}>Helper text</Text>
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
