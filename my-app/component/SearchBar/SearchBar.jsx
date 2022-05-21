import { useState } from "react";
import { TextInput, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default () => {
	const [search, setSearch] = useState("");

	return (
		<View style={styles.container}>
		<TextInput
			style={styles.input}
			onChangeText={setSearch}
			value={search}
			placeholder="Search"
		/>
			<Pressable style={styles.delete} onPress={() => setSearch("")}>
				<Icon name="close" size={40} color="black"/>
			</Pressable>
		</View>
	)
}