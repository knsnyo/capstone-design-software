import { useContext } from "react";
import { View } from "react-native";
import TagList from "../../component/TagList/TagList";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default () => {
	const { state, dispatch } = useContext(Context);
	const genre = ["범죄", "액션", "애니메이션", "드라마" ,"로맨스", "SF", "공포", "스릴러", "판타지", "전쟁", "역사", "코미디"];
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<TagList genre={state.like}/>
			</View>
			<View style={styles.container}>
				<TagList genre={genre}/>
			</View>
		</View>
	);
}