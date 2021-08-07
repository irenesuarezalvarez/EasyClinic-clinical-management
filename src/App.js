import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import Signup from "./pages/authentication/Signup";
import Login from "./pages/authentication/Login";
import Navbar from "./components/layouts/Navbar";
import Row from "./components/layouts/Row";
import Create from "./pages/patients/Create-new-patient";

function App() {
  return (
    <Router>
      <ThemeProvider theme={ProjectTheme}>
        <ResetStyles />
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>
          
          <Route path="/patients">
            <Row>Antonia Macarena de los Angeles</Row>
            <Row>Antonia Macarena de los Angeles</Row>
            <Row>Antonia Macarena de los Angeles</Row>
          </Route>

          <Route path="/create">
           <Create/>
          </Route>
        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
