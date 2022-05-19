import { useContext } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import SearchBar from "../../component/SearchBar/SearchBar";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <ItemList list={state.list}/>
      </View>
    </View>
  );
};
