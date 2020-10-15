import React from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import Nav from './Nav';
import Container from './Container';


const Content = () => {
  return (
    <div id="content">
      <Nav />
      <Container />
    </div>
  );
};

export default Content;

