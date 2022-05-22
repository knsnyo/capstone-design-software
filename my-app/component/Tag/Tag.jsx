import { useContext } from "react";
import { Context } from "../../context/Context";
import { Pressable, Text } from "react-native";
import { styles } from "./style";

export default ({text}) => {
	const { state, dispatch } = useContext(Context);
	const find = state.like.findIndex((e) => e === text);

	const onPress = () => {
		if( -1 === find) {
			dispatch({type: "LIKE", payload: text});
		} else {
			dispatch({type: "DISLIKE", payload: text});
		}
	}
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={styles.text}>#{text}</Text>
		</Pressable>
	);
}