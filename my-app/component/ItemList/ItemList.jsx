import { View, FlatList } from "react-native";
import Item from "../Item/Item";
import { styles } from "./style";

export default ({list}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item props={item}/>}
        keyExtractor={(item) => item.title}
        numColumns={3}
      />
    </View>
  );
};
