import { Pressable, Text } from "react-native";
import { styles } from "./style";

export default ({text}) => {
	return (
		<Pressable style={styles.container}>
			<Text style={styles.text}>#{text}</Text>
		</Pressable>
	);
}