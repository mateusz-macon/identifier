import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";
import { Wrapper } from "./App.css";
import MainContainer from "../layout/MainContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Wrapper>
          <TopMenu />
          <LeftMenu />
          <Switch>
            <Route path="/" component={MainContainer} />
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
