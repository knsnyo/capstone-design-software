import { useState } from "react";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";

export default (props) => {
  const [focus, setFocus] = useState(false);
	const [wish, setWish] = useState(false);
  return (
    <Pressable style={styles.container} onPress={() => setFocus(!focus)}>
      <ImageBackground
        source={require("./test.jpg")}
        resizeMode="contain"
        style={styles.image}
      >
        {focus && (
          <View style={styles.view}>
            <Pressable style={styles.press} onPress={() => setWish(!wish)}>
              <Icon name={wish ?"pushpin" : "pushpino"} size={16} color={"red"} />
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
