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
            case "coupang": {
              couCount += 1;
              break;
            }
          }
        });
      });
    }
    //console.log(netCount);
    // console.log(watCount);
    // console.log(wavCount);
    setNetflix(netCount);
    setWatcha(watCount);
    setWavve(wavCount);
    setCoupang(couCount);

    return () => {
      setCoupang(0);
      setNetflix(0);
      setWatcha(0);
      setWavve(0);
    };
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>이만큼 가지고 있어요</Text>
      <View style={styles.area}>
        {netflix !== 0 && (
          <BarPercent
            serviceName="Netflix"
            percent={Number((netflix / state.wishlist.length).toFixed(2))}
            color="red"
          />
        )}
        {watcha !== 0 && (
          <BarPercent
            serviceName="WatCha"
            percent={Number((watcha / state.wishlist.length).toFixed(2))}
            color="pink"
          />
        )}
        {wavve !== 0 && (
          <BarPercent
            serviceName="wavve"
            percent={Number((wavve / state.wishlist.length).toFixed(2))}
            color="violet"
          />
        )}
        {coupang !== 0 && (
          <BarPercent
            serviceName="coupang"
            percent={Number((coupang / state.wishlist.length).toFixed(2))}
            color="skyblue"
          />
        )}
      </View>
    </View>
  );
};
