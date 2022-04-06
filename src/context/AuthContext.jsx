import { createContext, useReducer } from "react";
import AuthReducer from "../reducer/AuthReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null
    });

    console.log('AuthContextProvider: state', state);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
