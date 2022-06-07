import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";
import { useIsFocused } from "@react-navigation/native";

export default ({ route, navigation }) => {
  const { state, dispatch } = useContext(Context);
  const isFocused = useIsFocused();
  let check = [];

  useEffect(() => {
    //console.log(route.params.id);
    if(isFocused) {
      navigation.setOptions({ title: route.params.id });
  
      switch (route.params.search) {
        case "tag": {
          state.list.map((item) => {
            item.genre.map((genre) => {
              if (genre === route.params.id) {
                check.push(item);
              }
            });
          });
  
          dispatch({ type: "SEARCH_ITEM", payload: check });
          break;
        }
  
        case "item": {
          state.list.map((item) => {
            if (-1 !== item.title.indexOf(route.params.id)) {
              check.push(item);
            }
          });
  
          dispatch({ type: "SEARCH_ITEM", payload: check });
        }
  
        default: {
          break;
        }
      }
    }
  }, [isFocused]);

  return (
    <View>
      {state.search.length !== 0 ? (
        <ItemList list={state.search} />
      ) : (
        <Text>결과가 없어요</Text>
      )}
    </View>
  );
};
