import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

function ButtonForLogin(props) {
	return (
		<TouchableOpacity
			onPress={() => props.handler()}
			style={[styles.container, props.style]}
		>
			<Text style={styles.caption}>Sign In</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 50,
		backgroundColor: '#0e7490',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
		minWidth: 88,
		paddingLeft: 16,
		paddingRight: 16,
	},
	caption: {
		color: 'rgba(236,254,255,1)',
		fontSize: 14,
	},
});

export default ButtonForLogin;
