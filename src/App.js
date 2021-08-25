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
import AuthProvider from "./utils/AuthContext";
import PrivateProf from "./utils/PrivateProf"; 
import Calendar from "./pages/general/Calendar";


function App() {
  return (
    <AuthProvider>
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

    {/* private routes deleted */}
          <PrivateProf path="/mypatients">
            <ListMyPatients/>
          </PrivateProf>

          <PrivateProf path="/details/:id">
            <Details/>
          </PrivateProf>

          <Route path="/edit/:id">
            <Edit/>
          </Route>

          <PrivateProf path="/sessions/:id">
            <History/>
          </PrivateProf>

          <Route path="/calendar">
            <Calendar/>
          </Route>
     

        </Switch>

      </ThemeProvider>
    </Router>

    </AuthProvider>
   
  );
}

export default App;
