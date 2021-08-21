import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import Signup from "./pages/authentication/Signup";
import Navbar from "./components/layouts/Navbar";
import Create from "./pages/patients/Create-new-patient";
import ListAllPatients from "./pages/patients/List-all-patients"
import ListMyPatients from "./pages/patients/List-my-patients";
import Edit from "./pages/patients/Edit-new-patient"
import History from "./pages/patients/Clinical-history";
import Home from "./pages/general/Home";
import Details from "./pages/patients/Details-patient";
import AuthContext from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoutes";

function App() {
  return (
    <AuthContext>
      <Router>
      
      <ThemeProvider theme={ProjectTheme}>
        <ResetStyles />
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>
          
          <Route path="/patients">
            <ListAllPatients/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <PrivateRoute path="/mypatients">
            <ListMyPatients/>
          </PrivateRoute>

          <Route path="/details/:id">
            <Details/>
          </Route>

          <Route path="/edit/:id">
            <Edit/>
          </Route>

          <Route path="/sessions/:id">
            <History/>
          </Route>


      

        </Switch>

      </ThemeProvider>
    </Router>

    </AuthContext>
   
  );
}

export default App;
