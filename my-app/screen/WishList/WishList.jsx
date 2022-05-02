import { View, Button } from "react-native";

export default ({route, navigation}) => {
	return (
		<View>
			<Button
			title="Go Result"
			onPress={() => navigation.navigate('Result')}
			/>
			<Button
			title="Go Home"
			onPress={() => navigation.navigate('Home')}
			/>
		</View>
	)
}