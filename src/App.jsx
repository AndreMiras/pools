import React from 'react';
import './App.css';
import Container from './components/Container';

const Headers = () => (
  <header className="App-header">
    <p>UniswapROI</p>
  </header>
);

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Container />
    </div>
  );
};

export default App;
