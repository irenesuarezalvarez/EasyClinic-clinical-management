import { Route, Redirect, useLocation } from "react-router-dom";
import {useContext} from "react";

import {AuthContext} from "./AuthContext"


const PrivateRoute = ({ children, ...props }) => {
  
  const location = useLocation();
  const { isAuth, role } = useContext(AuthContext) 

  console.log('ENTRAAA?? Front end private routes js12', role)
  if(role === "prof"){
    return    <Route {...props}>{children}</Route>
  }
  if(role === undefined){
    return  <Redirect
      to={{
      pathname: "/",
      state: { from: location },
    }}
  />
  }

/*   return isAuth ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  ); */
};

export default PrivateRoute;