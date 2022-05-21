import { View } from "react-native";
import { styles } from "./style";
import Tag from "../Tag/Tag";

export default () => {
	const genre = ["범죄", "액션", "애니메이션", "드라마" ,"로맨스", "SF", "공포", "스릴러", "판타지", "전쟁", "역사", "코미디"];
	return (
		<View style={styles.container}>
			{genre.map((data) => (
				<Tag text={data} key={data}/>
			))}
		</View>
	)
}