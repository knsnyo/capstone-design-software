import { View } from "react-native";
import { styles } from "./style";
import Tag from "../Tag/Tag";

export default ({genre, use, navigation}) => {
	return (
		<View style={styles.container}>
			{genre.map((data) => (
				<Tag text={data} key={data} use={use} navigation={navigation}/>
			))}
		</View>
	)
}