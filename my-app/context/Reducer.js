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
			const deletedWishList = state.wishlist.filter((wish) => (wish.title !== action.payload.title));
			return {
				...state,
				wishlist: deletedWishList,
			}
		}
		//initial wishlist
		case "SET": {
			return {
				...state,
				wishlist: action.payload,
			}
		}

		/* search item */
		//search list
		case "SEARCH": {
			return {

			}
		}
	}
}

export default Reducer;