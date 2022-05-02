import { View, Button } from "react-native";

export default ({route, navigation}) => {
	return (
		<View>
			<Button
			title="Go WishList"
			onPress={() => navigation.navigate('WishList')}
			/>
		</View>
	)
}