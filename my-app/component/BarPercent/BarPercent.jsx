import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { styles } from "./style";

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.serviceName}</Text>
      <View style={styles.percent}>
        <Progress.Bar progress={props.percent} color={props.color}/>
      </View>
      <Text style={styles.text}>{(props.percent * 100).toFixed(2)}%</Text>
    </View>
  );
};
