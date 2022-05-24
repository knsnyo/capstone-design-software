const Reducer = (state, action) => {
	switch (action.type) {
		/* wishlist */
		//add wishlist
		case "ADD_WISHLIST": {
			const addedWishList = [...state.wishlist, action.payload];
			return {
				...state,
				wishlist: addedWishList,
			}
		}
		//delete wishlist
		case "DELETE_WISHLIST": {
			const deletedWishList = state.wishlist.filter((wish) => (wish.title !== action.payload.title));
			return {
				...state,
				wishlist: deletedWishList,
			}
		}
		//initial wishlist
		case "SET_WISHLIST": {
			return {
				...state,
				wishlist: action.payload,
			}
		}

		/* item */
		//search list
		case "SEARCH": {
			return {

			}
		}

		/* like */
		// like
		case "ADD_LIKE": {
			const addLike = [...state.like, action.payload];
			return {
				...state,
				like: addLike,
			}
		}

		// dislike
		case "DELETE_LIKE": {
			const dislike = state.like.filter((like) => (like !== action.payload));
			return {
				...state,
				like: dislike,
			}
		}
	}
}

export default Reducer;