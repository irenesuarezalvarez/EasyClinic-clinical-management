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
     
      if(data.status === 200){ //TO BE CHANGED
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
  console.log('rooole', role)
  //Sign up function
  async function signUp(credentials){
    let data= "";
    try {
      const result = await axiosApi.post('/auth/signup', credentials)
      data = await result;

      if(data.status === 200){
        setIsAuth(true); 
        setRole(data.data.role);
      }else{
        alert('Please provide the right credentials')
      }
     
    } catch (err) {
      console.error(err)
    } 
    return data
  }

  //Log out function
  const logOut = async () => {
    let data = "";
    try{
      const data = await axiosApi.post('/auth/logout')
      setRole(undefined);
    }
    catch (err) {
      console.error(err)
    } 
    return data
  }

  return(
    <AuthContext.Provider value={{isAuth, logIn, signUp, role, setRole, logOut}}>
      {children}
    </AuthContext.Provider>
  )
} 


export default AuthProvider;