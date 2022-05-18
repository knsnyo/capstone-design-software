import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import SearchBar from "../../component/SearchBar/SearchBar";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default () => {
  const { state, dispatch } = useContext(Context);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) {
      console.log("SEARCH");
    }
  }, [isFocused]);

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
