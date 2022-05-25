import { useContext } from "react";
import { Context } from "../../context/Context";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
import { addLike, deleteLike } from "../../context/asyncStorage";

export default ({text}) => {
	const { state, dispatch } = useContext(Context);
	const find = state.like.findIndex((e) => e === text);

	const onPress = () => {
		if( -1 === find) {
			dispatch({type: "ADD_LIKE", payload: text});
			addLike(text);
		} else {
			dispatch({type: "DELETE_LIKE", payload: text});
			deleteLike(text);
		}
	}

	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={styles.text}>#{text}</Text>
		</Pressable>
	);
}