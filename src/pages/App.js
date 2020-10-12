import React from "react";
import GetStarted from "../layout/GetStarted";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={GetStarted} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
