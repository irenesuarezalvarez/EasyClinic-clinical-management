import { Route, Redirect, useLocation } from "react-router-dom";
import {useContext} from "react";

import {AuthContext} from "./AuthContext"


const PrivateRoute = ({ children, ...props }) => {
  
  const location = useLocation();
  const { isAuth } = useContext(AuthContext) 

  console.log('ENTRAAA?? Front end private routes js12')


  return isAuth ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;