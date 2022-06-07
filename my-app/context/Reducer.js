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
		case "SEARCH_ITEM": {
			return {
				...state,
				search: action.payload,
			}
		}

		/* like */
		//add like
		case "ADD_LIKE": {
			const addLike = [...state.like, action.payload];
			return {
				...state,
				like: addLike,
			}
		}
		//delete like
		case "DELETE_LIKE": {
			const dislike = state.like.filter((like) => (like !== action.payload));
			return {
				...state,
				like: dislike,
			}
		}
		//set like
		case "SET_LIKE": {
			return {
				...state,
				like: action.payload,
			}
		}
	}
}

export default Reducer;