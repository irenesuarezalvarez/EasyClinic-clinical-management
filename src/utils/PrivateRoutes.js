import { Route, Redirect, useLocation } from "react-router-dom";
import {useContext} from "react";

import {CreateAuthContext} from "./AuthContext"


const PrivateRoute = ({ children, ...props }) => {
  
  const location = useLocation();
  const { isAuth } = useContext(CreateAuthContext) 

  console.log(location);

  return isAuth ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
    // https://reactrouter.com/web/api/Redirect
  );
};

export default PrivateRoute;