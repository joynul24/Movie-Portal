/* eslint-disable react/prop-types */
import {createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({Children}) => {

  
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;