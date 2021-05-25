import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialState = {
    status: "normal",
    error: null,
    uniqueAuthId: null,
    userId: null,
  };
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
