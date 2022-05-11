import { useState } from "react";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";

export default (props) => {
  const [focus, setFocus] = useState(false);
	const [wish, setWish] = useState(false);

  const pressStar = () => {
    if (wish) {

    } else {
      
    }
    setWish(!wish);
  }
  return (
    <Pressable style={styles.container} onPress={() => setFocus(!focus)}>
      <ImageBackground
        source={require("./멜로가체질.jpg")}
        resizeMode="stretch"
        style={styles.image}
      >
        {focus && (
          <View style={styles.view}>
            <Pressable style={styles.press} onPress={pressStar}>
              <Icon name={wish ?"star" : "staro"} size={25} color={"yellow"} />
            </Pressable>
            <View style={styles.content}>
              <Text style={styles.title}>title</Text>
              <Text style={styles.description}>Description is very long. And I am so tired.</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </Pressable>
  );
};
