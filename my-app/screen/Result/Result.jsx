import { View, Text } from "react-native";
import BarPercent from "../../component/BarPercent/BarPercent";
import PiePercent from "../../component/PiePercent/PiePercent";
import CirclePercent from "../../component/CirclePercent/CirclePercent";
import { styles } from "./style";

export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text>점유율</Text>
        <BarPercent serviceName="Netflix" percent={0.75} color="red" />
        <BarPercent serviceName="WatCha" percent={0.7} color="pink" />
        <BarPercent serviceName="Tving" percent={0.9} color="violet" />
        <BarPercent serviceName="Disney+" percent={0.5} color="blue" />
      </View>
      <View style={styles.area}>
        <Text>취향</Text>
        <PiePercent serviceName="Netflix" percent={0.75} color="red" />
        <PiePercent serviceName="WatCha" percent={0.7} color="pink" />
        <PiePercent serviceName="Tving" percent={0.9} color="violet" />
        <PiePercent serviceName="Disney+" percent={0.5} color="blue" />
      </View>
      <View style={styles.area}>
        <Text>점유율</Text>
        <CirclePercent serviceName="Netflix" percent={0.75} color="red" />
        <CirclePercent serviceName="WatCha" percent={0.7} color="pink" />
        <CirclePercent serviceName="Tving" percent={0.9} color="violet" />
        <CirclePercent serviceName="Disney+" percent={0.5} color="blue" />
      </View>
    </View>
  );
};