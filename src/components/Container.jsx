import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import PortfolioController from './PortfolioController';
import Changelog from './Changelog';
import Home from './Home';

const Container = () => (
  <ReactContainer fluid>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/portfolio/:address">
        <PortfolioController />
      </Route>
      <Route path="/changelog">
        <Changelog />
      </Route>
    </Switch>
  </ReactContainer>
);

export default Container;
