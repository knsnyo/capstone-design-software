import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
import { addLike, deleteLike } from "../../context/asyncStorage";

export default ({text, use}) => {
	const { state, dispatch } = useContext(Context);
	const find = state.like.findIndex((e) => e === text);
	const [click, setClick] = useState(false);

	useEffect(() => {
		if("Like" === use && -1 !== find) {
			setClick(true);
		}
	}, []);

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
				setClick(!click);
			}
			case "Search": {

			}

			default: {
				
			}
		}
	}

	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={ click ? styles.click : styles.text}>#{text}</Text>
		</Pressable>
	);
}