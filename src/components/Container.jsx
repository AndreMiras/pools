import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import PortfolioController from './PortfolioController';
import Home from './Home';

const Container = () => (
  <ReactContainer fluid>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/portfolio/:address" key={Math.random()}>
        <PortfolioController timestamp={new Date().toString()} />
      </Route>
    </Switch>
  </ReactContainer>
);

export default Container;
