import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContentWrapper from './components/ContentWrapper';


const App = () => {
  return (
    <div className="App" id="wrapper">
      <Navbar />
      <ContentWrapper />
    </div>
  );
};

export default App;
