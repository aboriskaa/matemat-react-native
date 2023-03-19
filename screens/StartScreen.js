import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import TopLayer from '../components/TopLayer';
import MiddleLayer from '../components/MiddleLayer';

function StartScreen(props) {
	return (
		<View style={styles.container}>
			<StatusBar animated />

			<TopLayer />

			<View style={styles.containerMiddle}>
				<MiddleLayer style={styles.scrollArea} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0e7490',
	},
	containerMiddle: {
		flex: 1,
		height: '100%',
	},

	scrollArea: {
		width: '85%',
		height: '90%',
		backgroundColor: 'rgba(6,182,212,1)',
		borderRadius: 14,
		marginTop: 20,
		alignSelf: 'center',
	},
});

export default StartScreen;
