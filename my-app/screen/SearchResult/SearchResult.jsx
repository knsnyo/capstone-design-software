import { useContext } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";

export default () => {
	const {state, dispatch} = useContext(Context);

	return (
		<View>
			<ItemList list={state.list}/>
		</View>
	)
}