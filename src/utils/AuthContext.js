import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi"

export const AuthContext = createContext({});

const AuthProvider = ({children}) =>{
  const [isAuth, setIsAuth] = useState(false);
  const [ role, setRole] = useState(undefined);

  console.log('contexMounting')
  //Log in function
  async function logIn(credentials){
    try {
      const result = await axiosApi.post('/auth/login', credentials)
      const data = await result;
    
      setRole(data.data.role);
     
      if(data.status === 200){
        setIsAuth(true);
      }

     /*  setIsAuth(data.status === 200);  *///setIsAuth to true if status is 200
     /*  setIsAuth(data.data.role === "prof") */
     return data
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
  console.log('AuthRole??', role)

  //Log out function

  const logOut = async () => {
    const { data } = await axiosApi.post('/auth/logout')
    return data
  }
/*    async function logOut(){
    try {
      console.log('Logged out');
      setRole(undefined);
      await axiosApi.post('/auth/logout')
    } catch (err) {
      console.error(err)
    } 
    return;
  }  */

  return(
    <AuthContext.Provider value={{isAuth, logIn, signUp, role, setRole, logOut}}>
      {children}
    </AuthContext.Provider>
  )
} 


export default AuthProvider;