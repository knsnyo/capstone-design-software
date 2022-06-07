import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import list from "./list";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INIT_STATE = {
  ...list,
  wishlist: [],
  like: [],
  search: [],
};

export const Context = createContext(INIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE);

  useEffect(async () => {
    try {
      //await AsyncStorage.clear();
      const loadWish = await AsyncStorage.getItem("wishlist");
      const dataWish = JSON.parse(loadWish || "{}");
      (null !== loadWish) && dispatch({type: "SET_WISHLIST", payload: dataWish});

      const loadLike = await AsyncStorage.getItem("like");
      const dataLike = JSON.parse(loadLike || "{}");
      (null !== loadLike) && dispatch({type: "SET_LIKE", payload: dataLike});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
  );
};
