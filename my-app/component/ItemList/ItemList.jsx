import { useState, useCallback } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import Item from "../Item/Item";
import { styles } from "./style";

export default ({list}) => {

  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, timeout);
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.title}
        numColumns={3}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
