import { Route, Redirect, useLocation } from "react-router-dom";
import { useContext } from "react";

import {AuthContext} from "./AuthContext";

const PrivateRoute = ({ children, ...props }) => {
  const location = useLocation();
  const { role } = useContext(AuthContext) 

  if(role){
    return <Route {...props}>{children}</Route>
  }

  if(!role){
    return <Redirect
      to={{
      pathname: "/",
      state: { from: location },
    }}
  />
  }
};

export default PrivateRoute;