import { StyleSheet, View, Text } from 'react-native';

export default function TopLayer(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.showAppForMateMat}>Show app for MateMat</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(6,182,212,1)',
		borderRadius: 14,
		width: '85%',
		height: 160,
		marginTop: 50,
		alignSelf: 'center',
	},
	showAppForMateMat: {
		color: 'rgba(236,254,255,1)',
		textAlign: 'center',
		fontSize: 26,
		marginTop: 50,
		alignSelf: 'center',
	},
});
