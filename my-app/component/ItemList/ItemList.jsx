import { View, FlatList } from "react-native";
import Item from "../Item/Item";
import { styles } from "./style";

export default () => {
  const data = [
    { id: 1, title: "나나나" },
    { id: 2, title: "나나나" },
    { id: 3, title: "나나나" },
    { id: 4, title: "나나나" },
    { id: 5, title: "나나나" },
    { id: 6, title: "나나나" },
    { id: 7, title: "나나나" },
    { id: 8, title: "나나나" },
    { id: 9, title: "나나나" },
    { id: 10, title: "나나나" },
    { id: 11, title: "나나나" },
    { id: 12, title: "나나나" },
    { id: 13, title: "나나나" },
    { id: 14, title: "나나나" },
    { id: 15, title: "나나나" },
    { id: 16, title: "나나나" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item key={item.id} title={item.title} />}
        numColumns={3}
      />
    </View>
  );
};
