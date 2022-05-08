import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { styles } from "./style";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>{props.serviceName}</Text>
      </View>
      <View style={styles.percent}>
        <Progress.Pie progress={props.percent} color={props.color}/>
      </View>
    </View>
  );
};
