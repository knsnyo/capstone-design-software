const Reducer = (state, action) => {
	switch (action.type) {
		/* wishlist */
		//add wishlist
		case "ADD": {
			const addedWishList = [...state.wishlist, action.payload];
			return {
				...state,
				wishlist: addedWishList,
			}
		}
		//delete wishlist
		case "DELETE": {
			const deletedWishList = state.todos.filter((wishlist) => (wishlist.id !== action.payload.id));
			return {
				...state,
				wishlist: deletedWishList,
			}
		}

		/* search item */
		case "SEARCH": {

		}
	}
}

export default Reducer;