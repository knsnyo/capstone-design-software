import { View } from "react-native";
import BarPercent from "../../component/BarPercent/BarPercent";
import { styles } from "./style";

export default ({route, navigation}) => {
	return (
		<View style={styles.container}>
			<BarPercent serviceName="Netflix" percent={0.75} color="red"/>
			<BarPercent serviceName="WatCha" percent={0.7} color="pink"/>
			<BarPercent serviceName="Tving" percent={0.9} color="violet"/>
			<BarPercent serviceName="Disney+" percent={0.5} color="blue"/>
		</View>
	)
}