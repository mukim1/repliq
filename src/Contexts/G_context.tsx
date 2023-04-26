import { createContext, useState, FC, useContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import { initialUserStates, User } from "./states/auth_states";

export type G_contextState = {
  states: any;
  dispatch: (user: any) => void;
};

const contextDefaultValues: G_contextState = {
  states: {},
  dispatch: () => {},
};

const G_context = createContext<G_contextState>(contextDefaultValues);
export const useCtx = () => useContext(G_context);

const ContextProvider: FC = ({ children }) => {
  const [states, dispatch] = useReducer(userReducer, initialUserStates);

  const values: G_contextState = {
    states,
    dispatch,
  };

  return <G_context.Provider value={values}>{children}</G_context.Provider>;
};

export default ContextProvider;
