import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import list from "./list";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INIT_STATE = {
  ...list,
  wishlist: [],
};

export const Context = createContext(INIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE);

  useEffect(async () => {
    try {
      //await AsyncStorage.clear();
      const load = await AsyncStorage.getItem("wishlist");
      const data = JSON.parse(load || "{}");
      //console.log(data);
  
      (null !== load) && dispatch({type: "GET", payload: data});
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
