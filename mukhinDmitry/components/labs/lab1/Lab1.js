import { useState } from 'react';
import { 
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

const colorStep = (bgColor) => {
	let bgStr = bgColor.substr(1,2);
	bgStr = (bgStr * 1 + 5).toString();
	bgStr = bgStr + bgStr + bgStr;
	return "#" + bgStr
}

const KzrLab1= () => {
	const [bgColor, setBgColor] = useState("#000000")
	return (
		<SafeAreaView>
			<View>
				<Text style = {styles.kzrTitle}>
					Lab 1. Color lightener
				</Text>
				<View style={[styles.kzrBox, {backgroundColor: bgColor}]}>
				</View>
				<Button 
					style = {styles.kzrButton}
					onPress={() => setBgColor(colorStep(bgColor))}
					title="Try me"
					color={bgColor}
					accessibilityLabel="Just give it a try"
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	kzrButton: {
		marginTop: 64,
		paddingHorizontal: 24,
	},
	kzrTitle: {
		marginTop: 32,
		fontSize: 24,
		fontWeight: '600',
		textAlign: 'center',
	},
	kzrBox: {
		height: 100,
		margin: 50,
	}
});

export default KzrLab1;