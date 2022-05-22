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

		/* item */
		//search list
		case "SEARCH": {
			return {

			}
		}

		/* like */
		// like
		case "LIKE": {
			const addLike = [...state.like, action.payload];
			return {
				...state,
				like: addLike,
			}
		}

		// dislike
		case "DISLIKE": {
			const dislike = state.like.filter((like) => (like !== action.payload));
			return {
				...state,
				like: dislike,
			}
		}
	}
}

export default Reducer;