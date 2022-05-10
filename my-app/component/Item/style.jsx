import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: (width - (5 * 6)) / 3,
		height: height/5,
		margin: 5,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 15,
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "rgba(5,5,5,0.8)",
	},
	press: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: "red",
		margin: 5,
		padding: 5,
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "100%",
	},
	title: {
		flex: 1,
		textAlign: "center",
		fontSize: 24,
		color: "white",
	},
	description: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 16,
		color: "white",
	}
});