import { View, Button } from "react-native";

export default ({route, navigation}) => {
	return (
		<View>
			<Button
			title="Go Search"
			onPress={() => navigation.navigate('Search')}
			/>
			<Button
			title="Go WishList"
			onPress={() => navigation.navigate('WishList')}
			/>
		</View>
	)
}