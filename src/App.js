import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";

import AuthProvider from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import OutsideListener from "./components/ClickoutsideListener";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/generalPages/HomePage";
import SignupPage from "./pages/authentication/SignupPage";
import LoginPage from "./pages/authentication/LoginPage";
import ListAllPatientsPage from "./pages/patients/List-All-Patients-Page";
import ListMyPatientsPage from "./pages/patients/List-My-Patients-Page";
import CreatePatientPage from "./pages/patients/Create-Patient-Page";
import DetailsPage from "./pages/patients/Details-Patient-Page";
import EditPatientPage from "./pages/patients/Edit-Patient-Page"
import HistoryPage from "./pages/patients/Clinical-History-Page";
import Calendar from "./pages/generalPages/Calendar";
import AppointmentsPage from "./pages/professionals/AppointmentsPage";
import PageNotFound from "./pages/generalPages/PageNotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={ProjectTheme}>
          <ResetStyles/>

          <OutsideListener>
            <Sidebar/>
          </OutsideListener>
      
          <Switch>
        
            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route path="/signup">
              <SignupPage/>
            </Route>

            <Route path="/login">
              <LoginPage/>
            </Route>
            
            <PrivateRoute path="/patients">
              <ListAllPatientsPage/>
            </PrivateRoute>

            <Route path="/createpatient">
              <CreatePatientPage/>
            </Route>

            <PrivateRoute path="/mypatients">
              <ListMyPatientsPage/>
            </PrivateRoute>

            <PrivateRoute path="/details/:id">
              <DetailsPage/>
            </PrivateRoute>

            <PrivateRoute path="/edit/:id">
              <EditPatientPage/>
            </PrivateRoute>

            <PrivateRoute path="/sessions/:id">
              <HistoryPage/>
            </PrivateRoute>

            <Route path="/calendar">
              <Calendar/>
            </Route>
            
            <Route path="/appointment">
              <AppointmentsPage/>
            </Route>

            <Route>
              <PageNotFound/>
            </Route>

          </Switch>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
