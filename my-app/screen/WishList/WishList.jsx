import { View, Button } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { styles } from "./style";
import Navbar from "../../component/Navbar/Navbar";

export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ItemList />
      </View>
      <View style={styles.navbar}>
        <Navbar route={route} navigation={navigation}/>
      </View>
    </View>
  );
};
