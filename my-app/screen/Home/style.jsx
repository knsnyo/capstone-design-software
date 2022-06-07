import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	rowHigh: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "flex-end",
		flexDirection: "row",
		width: "100%",
	},
	rowBottom: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "flex-start",
		flexDirection: "row",
		width: "100%",
	},
	button: {
		width: width/4,
		height: width/4,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#000",
		margin: 10,
	},
	text: {
		textAlign: "center",
		fontSize: 16,
	}
});