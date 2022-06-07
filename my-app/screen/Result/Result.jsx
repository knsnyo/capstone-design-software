import { View, Text } from "react-native";
import BarPercent from "../../component/BarPercent/BarPercent";
import { styles } from "./style";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

/*
https://akdl911215.tistory.com/370
*/

export default ({ route, navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      //console.log("RESULT");
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>이만큼 가지고 있어요</Text>
        <BarPercent serviceName="Netflix" percent={0.75} color="red" />
        <BarPercent serviceName="WatCha" percent={0.7} color="pink" />
        <BarPercent serviceName="wavve" percent={0.9} color="violet" />
        <BarPercent serviceName="coupang play" percent={0.5} color="blue" />
      </View>
      
      {/* 
      <View style={styles.area}>
        <Text style={styles.text}>취향</Text>
        <PiePercent serviceName="Netflix" percent={0.75} color="red" />
        <PiePercent serviceName="WatCha" percent={0.7} color="pink" />
        <PiePercent serviceName="Tving" percent={0.9} color="violet" />
        <PiePercent serviceName="Disney+" percent={0.5} color="blue" />
      </View>
      <View style={styles.navbar}>
        <Navbar route={route} navigation={navigation}/>
      </View>
      */}
    </View>
  );
};