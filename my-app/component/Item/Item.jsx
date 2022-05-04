import { useState } from "react";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { styles } from "./style";

export default (props) => {
  const [focus, setFocus] = useState(false);
  return (
    <Pressable style={styles.container} onPress={() => setFocus(!focus)}>
      <ImageBackground
        source={require("./test.jpg")}
        resizeMode="contain"
        style={styles.image}
      >
        {focus && (
          <View style={styles.view}>
            <Text style={styles.text}>눌렀어염</Text>
          </View>
        )}
      </ImageBackground>
    </Pressable>
  );
};
