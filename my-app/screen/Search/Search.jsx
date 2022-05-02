import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import SearchBar from "../../component/SearchBar/SearchBar";
import { styles } from "./style";

export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <ItemList />
      </View>
    </View>
  );
};
