import AsyncStorage from "@react-native-async-storage/async-storage";

export const addWishList = async (newWish) => {
	try {
		const load = await AsyncStorage.getItem("wishlist");
		const data = JSON.parse(load || "{}");
		let update;
		if(null !== load) {
			update = [...data, newWish];
		} else {
			update = [newWish];
		}
		await AsyncStorage.setItem("wishlist", JSON.stringify(update));
	} catch (err) {
		console.log(err);
	}
}

export const deleteWishList = async (wishlist) => {
	try {
		const load = await AsyncStorage.getItem("wishlist");
		const data = JSON.parse(load || "{}");
		const update = data.filter((wish) => wish.title !== wishlist.title);
		await AsyncStorage.setItem("wishlist", JSON.stringify(update));
	} catch (err) {
		console.log(err);
	}
}

export const addLike = async (like) => {
	try {
		const load = await AsyncStorage.getItem("like");
		const data = JSON.parse(load || "{}");
		let update;
		if(null !== load) {
			update = [...data, like];
		} else {
			update = [like];
		}
		await AsyncStorage.setItem("like", JSON.stringify(update));
	} catch (err) {
		console.log(err);
	}
}

export const deleteLike = async (likelist) => {
	try {
		const load = await AsyncStorage.getItem("like");
		const data = JSON.parse(load || "{}");
		const update = data.filter((like) => like !== likelist);
		await AsyncStorage.setItem("like", JSON.stringify(update));
	} catch (err) {
		console.log(err);
	}
}