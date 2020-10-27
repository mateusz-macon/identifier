import React from "react";
import GetStarted from "../layout/GetStarted";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopMenu />
        <LeftMenu />
        <Switch>
          <Route path="/" component={GetStarted} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
