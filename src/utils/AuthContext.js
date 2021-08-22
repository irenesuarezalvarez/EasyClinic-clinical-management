import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi"

export const AuthContext = createContext({});

const AuthProvider = ({children}) =>{
  const [isAuth, setIsAuth] = useState(false);

  //Log in function
  async function logIn(credentials){
    try {
      const result = await axiosApi.post('/auth/login', credentials)
      const data = await result;
      console.log('role', data.data.role)

      setIsAuth(data.status === 200); //setIsAuth to true if status is 200
     /*  setIsAuth(data.data.role === "prof") */
    } catch (err) {
      console.error(err)
    } 

    return(
      'User is authenticated', credentials
    ) 
  }

  //Sign up function
  async function signUp(credentials){
    try {
      const result = await axiosApi.post('/auth/signup', credentials)
      const data = await result;
      console.log('aqui deberia tener el user de req session', data.data._id, data.status )

      setIsAuth(data.status === 200); //setIsAuth to true if status is 200
    } catch (err) {
      console.error(err)
    } 

    return(
      'User is authenticated', credentials //WHY???
    ) 
  }

  return(
    <AuthContext.Provider value={{isAuth, logIn, signUp}}>
      {children}
    </AuthContext.Provider>
  )
} 


export default AuthProvider;