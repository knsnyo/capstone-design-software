import { useState, useEffect, useContext } from "react";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import { addWishList, deleteWishList } from "../../context/asyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native";

export default ({props}) => {
  const { state, dispatch } = useContext(Context);
  const [focus, setFocus] = useState(false);
	const [wish, setWish] = useState(false);
  const isFocused = useIsFocused();

  const pressStar = () => {
    if (wish) {
      deleteWishList(props);
      dispatch({type: "DELETE", payload: props});
    } else {
      addWishList(props);
      dispatch({type: "ADD", payload: props});
    }
    setWish(!wish);
  };

  useEffect(async () => {
    try {
      const load = await AsyncStorage.getItem("wishlist");
      const data = JSON.parse(load || "{}");
      const index = data.findIndex((d) => d.title === props.title)
      if (-1 !== index){
        setWish(true);
      } else {
        setWish(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isFocused]);

  return (
    <Pressable style={styles.container} onPress={() => setFocus(!focus)}>
      <ImageBackground
        source={props.image}
        resizeMode="stretch"
        style={styles.image}
      >
        {focus && (
          <View style={styles.view}>
            <Pressable style={styles.press} onPress={pressStar}>
              <Icon name={wish ?"star" : "staro"} size={25} color={"yellow"} />
            </Pressable>
            <View style={styles.content}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.description}></Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </Pressable>
  );
};
