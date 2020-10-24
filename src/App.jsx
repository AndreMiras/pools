import React from 'react';
import './App.css';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContentWrapper from './components/ContentWrapper';

library.add(fas);

const App = () => (
  <Router>
    <div className="App" id="wrapper">
      <Navbar />
      <ContentWrapper />
    </div>
  </Router>
);

export default App;
