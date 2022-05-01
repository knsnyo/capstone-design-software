import { View, Button } from "react-native";

export default ({route, navigation}) => {
	return (
		<View>
			<Button
			title="Go Home"
			onPress={() => navigation.navigate('Home')}
			/>
		</View>
	)
}