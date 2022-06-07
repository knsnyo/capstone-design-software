import { useState } from "react";
import { TextInput, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default ({ navigation }) => {
  const [item, setItem] = useState("");

  const searchItem = (item) => {
    (item !== "")  && navigation.push("SearchResult", { id: item, search: "item" });
    setItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setItem}
        value={item}
        placeholder="Search"
        onSubmitEditing={() => searchItem(item)}
      />
      <Pressable style={styles.delete} onPress={() => searchItem(item)}>
        <Icon name="search1" size={40} color="black" />
      </Pressable>
    </View>
  );
};
