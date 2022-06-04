import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import ItemList from "../../component/ItemList/ItemList";
import { Context } from "../../context/Context";

export default ({route, navigation}) => {
	const {state, dispatch} = useContext(Context);
	const [list, setList] = useState();
	let check = [];

	useEffect(() => {
		//console.log(route.params.id);
		navigation.setOptions({title: route.params.id});

		switch(route.params.search){
			case "tag": {
				state.list.map((item) => {
					item.genre.map((genre) => {
						if(genre === route.params.id){
							check.push(item);
						}
					})
				});
			}
		}

		console.log(check);
		console.log("실행");
		setList(check);
		console.log("실행");
	}, [navigation]);

	return (
		<View>
			<ItemList list={check}/>
		</View>
	)
}