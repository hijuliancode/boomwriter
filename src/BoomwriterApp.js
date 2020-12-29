import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import HomeComponent from "./components/Home";
import TheWritingBeeComponent from "./components/TheWritingBee";
import HeaderComponent from "./components/shared/Header";
import FooterComponent from "./components/shared/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BoomwriterApp = () => {
  return (
    <Router>
      <Wrapper>
        <HeaderComponent />
        <Switch>
          <Route exact
            path="/home"
            component={() => <HomeComponent />} />
          <Route exact
            path="/the-writing-bee"
            component={() => <TheWritingBeeComponent />} />
        </Switch>
        <FooterComponent />
      </Wrapper>
    </Router>
  );
}

export default BoomwriterApp;
