import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import Signup from "./pages/authentication/Signup";
import Navbar from "./components/layouts/Navbar";
import CreatePatient from "./pages/patients/Create-new-patient";
import ListAllPatients from "./pages/patients/List-all-patients"
import ListMyPatients from "./pages/patients/List-my-patients";
import Edit from "./pages/patients/Edit-new-patient"
import History from "./pages/patients/Clinical-history";
import Home from "./pages/general/Home";
import DetailsPage from "./pages/patients/Details-patient";
import AuthProvider from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute"; 
import Calendar from "./pages/general/Calendar";
import CreateCloudi from "./pages/patients/Create-Cloudinary";


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
            <CreatePatient/>
          </Route>

          <Route path="/createclou">
            <CreateCloudi/>
          </Route>


          <PrivateRoute path="/mypatients">
            <ListMyPatients/>
          </PrivateRoute>

          <PrivateRoute path="/details/:id">
            <DetailsPage/>
          </PrivateRoute>

          <Route path="/edit/:id">
            <Edit/>
          </Route>

          <PrivateRoute path="/sessions/:id">
            <History/>
          </PrivateRoute>

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
