import { useContext,createContext } from "react";
import { useState } from "react";
export const AuthContext= createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider=({children})=>{
      const [change, setchange] = useState(null);
      return (<AuthContext.Provider value={{change,setchange}}>
           {children}
      </AuthContext.Provider>)
}