import { View, Text } from "react-native";
import TagList from "../../component/TagList/TagList";
import { styles } from "./style";

export default () => {
	
	return (
		<View style={styles.container}>
			<TagList/>
		</View>
	);
}