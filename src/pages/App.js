import React from "react";
import GetStarted from "../layout/GetStarted";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";
import { Wrapper } from "./App.css";
import LifeStyle from "../layout/LifeStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Wrapper>
          <TopMenu />
          <LeftMenu />
          <Switch>
            <Route path="/" component={GetStarted} />
            <Route path="/" component={LifeStyle} />
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
