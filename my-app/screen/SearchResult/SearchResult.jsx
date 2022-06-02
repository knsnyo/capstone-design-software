import { useContext, useEffect } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";

export default ({route, navigation}) => {
	const {state, dispatch} = useContext(Context);

	useEffect(() => {
		console.log(route.params.id);
		navigation.setOptions({title: route.params.id})
	}, [navigation]);

	return (
		<View>
			<ItemList list={state.list}/>
		</View>
	)
}