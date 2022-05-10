import { View, Pressable } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";

export default ({route, navigation}) => {
  return (
		<View style={styles.container}>
			<Pressable style={styles.press}
			onPress={() => navigation.navigate("Search")}>
				<Icon name="search1" size={40} color="black"/>
			</Pressable>
			<Pressable style={styles.press}
			onPress={() => navigation.navigate("WishList")}>
				<Icon name="staro" size={40} color="yellow"/>
			</Pressable>
			<Pressable style={styles.press}>
				<Icon name="heart" size={40} color="red"/>
			</Pressable>
			<Pressable style={styles.press}
			onPress={() => navigation.navigate("Result")}>
				<Icon name="barschart" size={40} color="black"/>
			</Pressable>
		</View>
	);
};
