import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INIT_STATE = {
  wishlist: [
    {
      id: "Number",
      title: "String",
      description: "String",
      image: "URI"
    },
  ],
};

export const Context = createContext(INIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
  );
};
