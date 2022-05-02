import { useState } from "react";
import { TextInput, Pressable, View } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default () => {
	const [search, setSearch] = useState("");

	return (
		<View style={styles.container}>
			<TextInput
			style={styles.input}
			onChangeText={setSearch}
			value={search}
			placeholder="search item"/>
			<Pressable style={styles.search}>
				<Icon name="search1" size={40} color="black"/>
			</Pressable>
		</View>
	)
}