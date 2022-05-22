import { View } from "react-native";
import { styles } from "./style";
import Tag from "../Tag/Tag";

export default ({genre}) => {
	return (
		<View style={styles.container}>
			{genre.map((data) => (
				<Tag text={data} key={data}/>
			))}
		</View>
	)
}