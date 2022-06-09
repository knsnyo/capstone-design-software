import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";
import { useIsFocused } from "@react-navigation/native";

export default ({ route, navigation }) => {
  const { state, dispatch } = useContext(Context);

  const isFocused = useIsFocused();

  const [search, setSearch] = useState([]);

  useEffect(() => {
    let check = [];
    if (isFocused) {
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
          break;
        }
        case "item": {
          state.list.map((item) => {
            if (-1 !== item.title.indexOf(route.params.id)) {
              check.push(item);
            }
          });
          break;
        }
        default: {
          break;
        }
      }
      setSearch(check);
    }

    return () => {
      setSearch([]);
    };
  }, [isFocused]);

  return (   
    <View>
      {search.length !== 0 ? (
        <ItemList list={search} />
      ) : (
        <Text>결과가 없어요</Text>
      )}
    </View>
  );
};
