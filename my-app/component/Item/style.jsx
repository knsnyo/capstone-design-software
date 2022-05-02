import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: (width - (5 * 6)) / 3,
		height: height/5,
		borderColor: "#ddd",
		borderWidth: 1,
		margin: 5,
	},
	text: {
		flex: 1,
		textAlign: "center",
	},
});