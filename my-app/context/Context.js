import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import list from "./list";

const INIT_STATE = list;

export const Context = createContext(INIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE);

  useEffect(() => {
    //console.log(INIT_STATE);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
  );
};
