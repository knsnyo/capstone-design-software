import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import SearchBar from "../../component/SearchBar/SearchBar";
import TagList from "../../component/TagList/TagList";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default ({navigation}) => {
  const isFocused = useIsFocused();
  const { state, dispatch } = useContext(Context);
  const genre = [
    "범죄",
    "액션",
    "애니메이션",
    "드라마",
    "로맨스",
    "SF",
    "공포",
    "스릴러",
    "판타지",
    "전쟁",
    "역사",
    "코미디",
    "예능",
    "리얼리티",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchBar navigation={navigation}/>
        </View>
      </View>
      <View style={{height: 20}}></View>
      <View style={styles.tag}>
        <TagList genre={genre} use="Search" navigation={navigation}/>
      </View>
    </View>
  );
};

/*

      <View style={styles.list}>
        <ItemList list={state.list}/>
      </View>
*/
