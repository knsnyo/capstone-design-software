import { View, Button } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { styles } from "./style";

export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go Result" onPress={() => navigation.navigate("Result")} />
      <View style={styles.list}>
        <ItemList />
      </View>
    </View>
  );
};
