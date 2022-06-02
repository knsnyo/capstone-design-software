import { View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowHigh}>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "Search"})}>
          <Icon name="search1" size={40} color="black" />
					<Text>Search</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "WishList"})}>
          <Icon name="star" size={40} color="yellow"/>
					<Text>WishList</Text>
        </Pressable>
      </View>
      <View style={styles.rowBottom}>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "Like"})}>
          <Icon name="heart" size={40} color="red"/>
					<Text>Favorite</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "Result"})}>
          <Icon name="barschart" size={40} color="black"/>
					<Text>Result</Text>
        </Pressable>
      </View>
    </View>
  );
};
