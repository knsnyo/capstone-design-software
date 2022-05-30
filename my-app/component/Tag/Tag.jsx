import { useContext } from "react";
import { Context } from "../../context/Context";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
import { addLike, deleteLike } from "../../context/asyncStorage";

export default ({text, use}) => {
	const { state, dispatch } = useContext(Context);
	const find = state.like.findIndex((e) => e === text);

	const onPress = () => {
		switch(use) {
			case "Like": {
				if( -1 === find) {
					dispatch({type: "ADD_LIKE", payload: text});
					addLike(text);
				} else {
					dispatch({type: "DELETE_LIKE", payload: text});
					deleteLike(text);
				}
			}
			case "Search": {

			}

			default: {
				
			}
		}
	}

	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={styles.text}>#{text}</Text>
		</Pressable>
	);
}