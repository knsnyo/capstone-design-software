import React from "react";
import { View, Pressable, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

const width = Dimensions.get("window").width;

export default ({navigation}) => {
  React.useEffect(() => {
    console.log(width);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.rowHigh}>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "Search"})}>
          <Icon name="search1" size={width/6} color="black" />
					<Text style={{fontSize: 20}}>Search</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "WishList"})}>
          <Icon name="star" size={width/6} color="yellow"/>
					<Text style={{fontSize: 20}}>WishList</Text>
        </Pressable>
      </View>
      <View style={styles.rowBottom}>
        <Pressable style={styles.button} onPress={() => navigation.push("Menu", {id: "Result"})}>
          <Icon name="barschart" size={width/6} color="black"/>
					<Text style={{fontSize: 20}}>Result</Text>
        </Pressable>
      </View>
    </View>
  );
};
