import React, { useState, createContext } from "react";
import axiosApi from "./AxiosApi"

export const AuthContext = createContext({});

const AuthProvider = ({children}) =>{
  const [isAuth, setIsAuth] = useState(false);
  const [ role, setRole] = useState(undefined);
  const [sidebar, setSidebar] = useState(false);
 
  //Set Sidebar
  const showSidebar = () => setSidebar(!sidebar);
  //Log in function
  async function logIn(credentials){
    try {
      const result = await axiosApi.post('/auth/login', credentials)
      const data = await result;
      setRole(data.data.role);
      setIsAuth(true);
     
      if(data.status === 200){ //TO BE CHANGED
        setIsAuth(true);
      }

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
      data = await axiosApi.post('/auth/logout')
      setIsAuth(false);
      setRole(undefined);
    }
    catch (err) {
      console.error(err)
    } 
    return data
  }

  return(
    <AuthContext.Provider value={{isAuth, logIn, signUp, role, setRole, logOut, sidebar, showSidebar}}>
      {children}
    </AuthContext.Provider>
  )
} 


export default AuthProvider;