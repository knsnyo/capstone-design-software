import { View, Text } from "react-native";
import { styles } from "./style"

export default (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.title}안녕</Text>
		</View>
	)
}