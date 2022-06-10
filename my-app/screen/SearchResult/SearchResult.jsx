import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Item from "../../component/Item/Item";
import { useIsFocused } from "@react-navigation/native";
import { styles } from "./style";

export default ({ route, navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({ title: route.params.id });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {route.params.result.length !== 0 ? (
        <FlatList
          data={route.params.result}
          renderItem={({ item }) => <Item props={item} />}
          keyExtractor={(item) => item.title}
          numColumns={3}
        />
      ) : (
        <Text>결과가 없어요</Text>
      )}
    </View>
  );
};

/*
<ItemList list={route.params.result} />
switch (route.params.search) {
        case "tag": {
          /*
          state.list.map((item) => {
            item.genre.map((genre) => {
              if (genre === route.params.id) {
                check.push(item);
              }
            });
          });
          console.log(state.search);
          break;
        }
        case "item": {
          /*
          state.list.map((item) => {
            if (-1 !== item.title.indexOf(route.params.id)) {
              check.push(item);
            }
          });
          console.log(state.search);
          break;
        }
        default: {
          break;
        }
      }
      
*/
