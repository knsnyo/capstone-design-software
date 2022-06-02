import { useContext } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import SearchBar from "../../component/SearchBar/SearchBar";
import TagList from "../../component/TagList/TagList";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default ({navigation}) => {
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
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchBar />
        </View>
      </View>
      <View style={styles.container}>
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
