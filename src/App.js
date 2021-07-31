import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";
import { Switch, Route, Link } from "react-router-dom";


import Signup from "./pages/authentication/Signup";
import Login from "./pages/authentication/Login";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    
    <ThemeProvider theme={ProjectTheme}>
      <ResetStyles />
      <Navbar/>
      <nav>
        <Link to="/">Log iiiin</Link>
        <Link to="/signup">Sign uuup</Link>
      </nav>
      
        <Switch>
        {/*  <Route exact path="/">
            <Link to="/form">
              <Home />
            </Link>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>

          <PrivateRoute path="/form">
            <ComplaintsForm myFormData={handleFormData} />
          </PrivateRoute>

          <PrivateRoute path="/overview">
            <ComplaintsCards cards={formData} />
          </PrivateRoute> */}
          <Route exact path="/">
            <Login/>
          </Route>
          
          <Route path="/signup">
            <Signup/>
          </Route>

        </Switch>
    </ThemeProvider>
  );
}

export default App;
