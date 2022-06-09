import { useState, useContext } from "react";
import { TextInput, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default ({ navigation }) => {
  const { state, dispatch } = useContext(Context);
  const [item, setItem] = useState("");

  const searchItem = (search) => {
    if("" !== item) {
      let check = []
      state.list.map((item) => {
        if (-1 !== item.title.indexOf(search)) {
          check.push(item);
        }
      });
      //console.log(check);
			dispatch({type: "SEARCH_ITEM", payload: check});
      navigation.push("SearchResult", { id: item, search: "item", result: check });
    }
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
