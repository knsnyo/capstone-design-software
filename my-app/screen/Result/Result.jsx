import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import BarPercent from "../../component/BarPercent/BarPercent";
import { styles } from "./style";
import { useIsFocused } from "@react-navigation/native";
import { Context } from "../../context/Context";

/*
https://akdl911215.tistory.com/370
*/

export default ({ route, navigation }) => {
  const { state, dispatch } = useContext(Context);

  const isFocused = useIsFocused();

  const [netflix, setNetflix] = useState(0);
  const [watcha, setWatcha] = useState(0);
  const [wavve, setWavve] = useState(0);
  const [coupang, setCoupang] = useState(0);

  useEffect(() => {
    //console.log("RESULT");
    let netCount = 0;
    let watCount = 0;
    let wavCount = 0;
    let couCount = 0;
    if (isFocused) {
      state.wishlist.map((item) => {
        item.service.map((service) => {
          switch (service) {
            case "netflix": {
              netCount += 1;
              break;
            }
            case "watcha": {
              watCount += 1;
              break;
            }
            case "wavve": {
              wavCount += 1;
              break;
            }
          }
        });
      });
    }
    // console.log(netCount);
    // console.log(watCount);
    // console.log(wavCount);
    setNetflix(netCount);
    setWatcha(watCount);
    setWavve(wavCount);

    return () => {
      setCoupang(0);
      setNetflix(0);
      setWatcha(0);
      setWavve(0);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>이만큼 가지고 있어요</Text>
        <BarPercent
          serviceName="Netflix"
          percent={netflix / state.wishlist.length}
          color="red"
        />
        <BarPercent serviceName="WatCha" percent={watcha / state.wishlist.length} color="pink" />
        <BarPercent serviceName="wavve" percent={wavve / state.wishlist.length} color="violet" />
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
