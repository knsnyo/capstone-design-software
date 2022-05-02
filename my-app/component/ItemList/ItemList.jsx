import { View, Text } from "react-native";
import { styles } from "./style";

export default () => {
	const items = [
		{id: 1, title: "나나나"},
		{id: 2, title: "나나나"},
		{id: 3, title: "나나나"},
		{id: 4, title: "나나나"},
		{id: 5, title: "나나나"},
		{id: 6, title: "나나나"},
		{id: 7, title: "나나나"},
		{id: 8, title: "나나나"},
		{id: 9, title: "나나나"},
		{id: 10, title: "나나나"},
		{id: 11, title: "나나나"},
		{id: 12, title: "나나나"},
	];
	return (
		<View style={styles.container}>
			{items.map((item) => {
				return (
					<View key={item.id}>
						<Text>{item.title}</Text>
					</View>
				)
			})}
		</View>
	)
}