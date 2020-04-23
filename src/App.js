import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// COMPONENTS
import Navbar from "./components/Navbar";

// PAGES
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
  primary: {
    main: "#1E88E5",
    light: "#6ab7ff",
    dark: "#005cb2",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#283593",
    light: "#5f5fc4",
    dark: "#001064",
    contrastText: "#ffffff",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App general-container">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
