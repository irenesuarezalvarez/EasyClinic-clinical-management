import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi"

export const CreateAuthContext = createContext({});

const AuthContext = ({children}) =>{
  const [isAuth, setIsAuth] = useState(false);

  async function logIn(credentials){
    try {
      const result = await axiosApi.post('/auth/login', credentials)
      const data = await result;
      console.log(data)

      setIsAuth(data.status === 200);

     /*  if(data.status === 200){
        setIsAuth(true);
      } */
      
      
    } catch (err) {
      console.error(err)
    } 

    return(
      'is authenticated', credentials
    )
  }

  return(
    <CreateAuthContext.Provider value={{isAuth, logIn}}>
      {children}
    </CreateAuthContext.Provider>
  )
} 


export default AuthContext;