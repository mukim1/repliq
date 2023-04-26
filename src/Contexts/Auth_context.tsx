import { createContext, useState, FC, useContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import { initialUserStates, User } from "./states/auth_states";

export type AuthContextState = {
  user: User;
  dispatchUser: (user: any) => void;
};

const contextDefaultValues: AuthContextState = {
  user: {} as User,
  dispatchUser: () => {},
};

const AuthContext = createContext<AuthContextState>(contextDefaultValues);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: FC = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, initialUserStates);

  const values: AuthContextState = {
    user,
    dispatchUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
