import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default () => {
  const { state, dispatch } = useContext(Context);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log("WISH");
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ItemList list={state.wishlist}/>
      </View>
    </View>
  );
};
