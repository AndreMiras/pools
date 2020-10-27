import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import PortfolioController from '../portfolio/PortfolioController';
import PoolController from '../pairs/PoolController';
import PairsController from '../pairs/PairsController';
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
      <Route exact path="/pairs">
        <PairsController />
      </Route>
      <Route path="/pairs/:address">
        <PoolController />
      </Route>
      <Route path="/changelog">
        <Changelog />
      </Route>
    </Switch>
  </ReactContainer>
);

export default Container;
