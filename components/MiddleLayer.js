import { StyleSheet, View, ScrollView, Text } from 'react-native';
import InputLogin from './InputLogin';
import ButtonForLogin from './ButtonForLogin';
import InputPassword from './InputPassword';

function MiddleLayer(props) {
	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.scrollArea}>
				<ScrollView
					horizontal={false}
					contentContainerStyle={styles.scrollArea_contentContainerStyle}
				>
					<View style={styles.formLogin}>
						<Text style={styles.loginForm}>LOGIN FORM</Text>
						<InputLogin style={styles.materialHelperTextBox}></InputLogin>
						<InputPassword style={styles.materialHelperTextBox}></InputPassword>
						<ButtonForLogin
							onPress={() => {
								console.log('You tapped the button!');
							}}
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
